import {ContextProviderComponent} from 'cwco';

class BFSIcon extends ContextProviderComponent {
	static observedAttributes = [
		'name',
		'size',
		'color'
	];
	name = '';
	size = '16px';
	color = '#000';
	
	// only need this if BFSIcon extends WebComponent instead
	// because using "textContent" will be always empty for ContextProviderComponent
	// get iconName() {
	// 	return this.name || (this.textContent || '').trim();
	// }
	
	get fontSize() {
		switch (this.size) {
			case 'xsm':
				return '10px';
			case 'sm':
				return '14px'
			case 'md':
				return '16px';
			case 'lg':
				return '21px'
			case 'xlg':
				return '28px';
			default:
				return this.size
		}
	}
	
	get accent() {
		switch (this.color) {
			case 'primary':
				return '#222';
			case 'secondary':
				return '#0982b3'
			case 'warning':
				return '#f0cb0c';
			case 'success':
				return '#09b209'
			case 'error':
				return '#900';
			default:
				return this.color
		}
	}
	
	get stylesheet() {
		return `
			<link href="./src/bfs-icon.css" rel="stylesheet"/>
		`
	}
	
	get template() {
		return `
			<i class="bfs-{name} icon"
				attr.style.font-size="{this.fontSize}, size"
				attr.style.color="{this.accent}, color"
				></i>`
	}
}

BFSIcon.register();
