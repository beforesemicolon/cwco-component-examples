import {WebComponent} from 'CWCO';

class ButtonBase extends WebComponent {
	static delegatesFocus = true;
	static observedAttributes = [
		'type',
		'disabled',
		'label',
		'autofocus',
		'radius',
	];
	allowRipple = true;
	radius = '3px';
	$refs: {
		ripple?: HTMLSpanElement,
		btn?: HTMLButtonElement
	} = {}
	
	get template() {
		return `
			<button
			  type="{type}"
				attr.disabled="disabled"
				attr.autofocus="autofocus"
				onclick="ripple($event)"
				ref="btn"
			>
			<slot>{label}</slot>
			<span ref="ripple" class="ripple" if="allowRipple"></span>
			</button>
		`;
	}
	
	get stylesheet() {
		return `
		<style>
			:host {
				display: inline-block;
				box-sizing: border-box;
				pointer-events: [disabled ? 'none' : 'auto'];
			}
			
			:host * {
				box-sizing: border-box;
			}
			
			button {
				padding: 0.6rem 1.2rem;
				border-radius: [radius];
				text-transform: capitalize;
				letter-spacing: 0.05rem;
				font-size: 1rem;
				opacity: [disabled ? '0.5' : '1'];
				position: relative;
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
				cursor: pointer;
				outline: none;
				border: 2px solid transparent;
				overflow: hidden;
				color: #111;
				background: #eee;
				transition: background-color 0.3s ease;
			}

			button:hover {
				background: #efefef;
			}
			
			span.ripple {
			  position: absolute;
			  border-radius: 50%;
			  transform: scale(0);
			  animation: ripple 0.6s linear;
			  background-color: rgba(255, 255, 255, 0.7);
			}
			
			@keyframes ripple {
			  to {
			    transform: scale(4);
			    opacity: 0;
			  }
			}
		</style>
		`
	}
	
	ripple(event: MouseEvent) {
		const {ripple, btn} = this.$refs;
		
		if (ripple && btn) {
			ripple.remove();
			const diameter = Math.max(btn.clientWidth, btn.clientHeight);
			const radius = diameter / 2;
			
			ripple.style.width = ripple.style.height = `${diameter}px`;
			ripple.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
			ripple.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
			btn.appendChild(ripple);
		}
	}
}

class BFSButton extends ButtonBase {}

class BFSPrimaryButton extends ButtonBase {
	get stylesheet() {
		return `
			${super.stylesheet}
			<style>
				button {
					background: #222;
					color: #fff;
				}
				
				button:hover {
					background: #333;
				}
			</style>
		`
	}
}

class BFSOutlinedButton extends ButtonBase {
	get stylesheet() {
		return `
			${super.stylesheet}
			<style>
				button {
					background: none;
					color: #222;
					border-color: #222;
				}
			</style>
		`
	}
}

class BFSGhostButton extends ButtonBase {
	get stylesheet() {
		return `
			${super.stylesheet}
			<style>
				button {
					background: none;
					color: #222;
				}
			</style>
		`
	}
}

class BFSCtaButton extends ButtonBase {
	// allowRipple = false;
	
	get stylesheet() {
		return `
			${super.stylesheet}
			<style>
				button {
					background: #5a22c8;
					color: #fff;
				}
				
				button:hover {
					background: #7b42ed;
				}
			</style>
		`
	}
}

BFSButton.register();
BFSPrimaryButton.register();
BFSOutlinedButton.register();
BFSGhostButton.register();
BFSCtaButton.register();
