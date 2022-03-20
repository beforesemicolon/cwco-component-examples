import {ContextProviderComponent} from 'cwco';

class ThemeProviderComponent extends ContextProviderComponent {
	static observedAttributes = [
		'src',
		'mode',
		'default-mode'
	];
	mode = '';
	defaultMode = '';
	#theme: Record<string, any> = {};
	currentTheme = {};
	
	get stylesheet() {
		return `
			<style>
				:root {
					[this.getThemeCSSVars()]
				}
			</style>
		`
	}
	
	onMount() {
		fetch(this.getAttribute('src') || '')
			.then(res => res.json())
			.then(res => {
				this.#theme = res;
				this.currentTheme = res[this.mode || this.defaultMode];
			})
	}
	
	onUpdate(name: string, _oldValue: any, newValue: any) {
		if (name === 'mode') {
			this.currentTheme = this.#theme[newValue] || null;
		}
	}
	
	getThemeCSSVars() {
		if (this.currentTheme) {
			const flattenTheme = (function flattenObject(obj: Record<string, any>, prefix: string = '') {
				return Object.keys(obj)
					.reduce((acc, k) => {
						const pre = prefix.length ? prefix + '-' : '';
						
						if (typeof obj[k] === 'object') {
							Object.assign(acc, flattenObject(obj[k], pre + k))
						} else {
							acc[pre + k] = obj[k];
						}
						
						return acc;
					}, {} as any)
			})(this.currentTheme);
			
			let str = '';
			
			for (let key of Object.keys(flattenTheme)) {
				str += `--${key}: ${flattenTheme[key]};\n`;
			}
			
			return str;
		}
		
		return '';
	}
	
	changeThemeMode(newMode: string) {
		this.mode = newMode;
	}
}

ThemeProviderComponent.register();
