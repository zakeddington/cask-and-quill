import { SPRITE_URL, KEY_ESCAPE } from '../config/constants.js';

export const THEME_STORAGE_KEY = 'cq-theme';
const THEMES = [
	{ value: 'dark', label: 'Dark' },
	{ value: 'light', label: 'Light' },
];
const DEFAULT_THEME = 'dark';

/*
 * The saved theme is applied before first paint by an inline script at the
 * top of <body> in each page, so this component only handles changes.
 */
export class ThemeSwitcher {
	constructor(elContainer) {
		this.el = {
			container: elContainer,
		};

		this.state = {
			theme: this.getCurrentTheme(),
		};

		this.onOutsideClick = this.onOutsideClick.bind(this);
		this.onKeydown = this.onKeydown.bind(this);
	}

	init() {
		this.render();
		this.el.toggle = this.el.container.querySelector('.theme-switcher__toggle');
		this.el.menu = this.el.container.querySelector('.theme-switcher__menu');
		this.el.container.addEventListener('click', event => this.onClick(event));
	}

	getCurrentTheme() {
		return document.body.classList.contains('theme--light') ? 'light' : DEFAULT_THEME;
	}

	setTheme(theme) {
		THEMES.forEach(({ value }) => document.body.classList.toggle(`theme--${value}`, value === theme));
		this.state.theme = theme;

		try {
			localStorage.setItem(THEME_STORAGE_KEY, theme);
		} catch {
			// Storage unavailable (private mode, blocked) — theme still applies for this page view
		}

		this.el.menu.querySelectorAll('.theme-switcher__option').forEach(option => {
			option.setAttribute('aria-checked', String(option.dataset.theme === theme));
		});
	}

	onClick(event) {
		if (event.target.closest('.theme-switcher__toggle')) {
			if (this.el.menu.hidden) {
				this.openMenu();
			} else {
				this.closeMenu();
			}
			return;
		}

		const option = event.target.closest('.theme-switcher__option');
		if (option) {
			this.setTheme(option.dataset.theme);
			this.closeMenu();
			this.el.toggle.focus();
		}
	}

	onOutsideClick(event) {
		if (!this.el.container.contains(event.target)) {
			this.closeMenu();
		}
	}

	onKeydown(event) {
		if (event.key === KEY_ESCAPE) {
			this.closeMenu();
			this.el.toggle.focus();
		}
	}

	openMenu() {
		this.el.menu.hidden = false;
		this.el.toggle.setAttribute('aria-expanded', 'true');
		document.addEventListener('click', this.onOutsideClick);
		document.addEventListener('keydown', this.onKeydown);
	}

	closeMenu() {
		this.el.menu.hidden = true;
		this.el.toggle.setAttribute('aria-expanded', 'false');
		document.removeEventListener('click', this.onOutsideClick);
		document.removeEventListener('keydown', this.onKeydown);
	}

	render() {
		const options = THEMES.map(({ value, label }) => `
			<button class="theme-switcher__option" type="button" role="menuitemradio" data-theme="${value}" aria-checked="${value === this.state.theme}">${label}</button>`
		).join('');

		this.el.container.innerHTML = `
			<button class="theme-switcher__toggle button button--icon-only" type="button" aria-label="Theme" aria-expanded="false" aria-haspopup="true">
				<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-palette"></use></svg>
			</button>
			<div class="theme-switcher__menu" role="menu" aria-label="Theme" hidden>${options}
			</div>`;
	}
}
