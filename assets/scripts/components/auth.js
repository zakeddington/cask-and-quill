import { getSession, signIn, signOut } from '../supabase.js';
import { SPRITE_URL } from '../config/constants.js';

export class Auth {
	constructor(elContainer, { onAuthChange }) {
		this.el = {
			container: elContainer,
		};

		this.state = {
			session: null,
		};

		this.onAuthChange = onAuthChange;

		this.onOutsideClick = this.onOutsideClick.bind(this);
	}

	async init() {
		this.state.session = await getSession();
		this.render();
		this.addEventListeners();
		return !!this.state.session;
	}

	addEventListeners() {
		this.el.container.addEventListener('click', event => this.onAuthClick(event));
		this.el.container.addEventListener('submit', event => this.onAuthSubmit(event));
	}

	onOutsideClick(event) {
		if (!this.el.container.querySelector('.auth__user')?.contains(event.target)) {
			this.closeMenu();
		}
	}

	openMenu() {
		const menu = this.el.container.querySelector('.auth__menu');
		const button = this.el.container.querySelector('.auth__menu-toggle');
		if (!menu || !button) return;

		menu.hidden = false;
		button.setAttribute('aria-expanded', 'true');
		document.addEventListener('click', this.onOutsideClick);
	}

	closeMenu() {
		const menu = this.el.container.querySelector('.auth__menu');
		const button = this.el.container.querySelector('.auth__menu-toggle');
		if (!menu || !button) return;

		menu.hidden = true;
		button.setAttribute('aria-expanded', 'false');
		document.removeEventListener('click', this.onOutsideClick);
	}

	async onAuthClick(event) {
		const action = event.target.closest('.auth__action')?.dataset.authAction;
		if (!action) return;

		if (action === 'open-login') {
			document.getElementById('auth-dialog')?.showModal();
		} else if (action === 'close-login') {
			document.getElementById('auth-dialog')?.close();
		} else if (action === 'toggle-menu') {
			const menu = this.el.container.querySelector('.auth__menu');
			if (menu?.hidden) {
				this.openMenu();
			} else {
				this.closeMenu();
			}
		} else if (action === 'logout') {
			this.closeMenu();
			await signOut();
			this.state.session = null;
			this.render();
			this.onAuthChange(false);
		}
	}

	async onAuthSubmit(event) {
		event.preventDefault();
		if (!event.target.matches('.auth__form')) return;

		const formData = new FormData(event.target);
		const errorEl = this.el.container.querySelector('.auth__error');

		try {
			errorEl.hidden = true;
			this.state.session = await signIn(
				formData.get('email'),
				formData.get('password')
			);
			document.getElementById('auth-dialog')?.close();
			this.render();
			this.onAuthChange(true);
		} catch {
			errorEl.textContent = 'Invalid email or password.';
			errorEl.hidden = false;
		}
	}

	render() {
		this.el.container.innerHTML = this.state.session
			? this.renderSignedIn()
			: this.renderSignedOut();
	}

	renderSignedIn() {
		return `
			<div class="auth__user">
				<button class="auth__action auth__menu-toggle button button--icon-only is-signed-in" data-auth-action="toggle-menu" aria-label="Account menu" aria-expanded="false" aria-haspopup="true">
					<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-user-circle-fill"></use></svg>
				</button>
				<div class="auth__menu" hidden>
					<button class="auth__action auth__signout" data-auth-action="logout" type="button">Sign Out</button>
				</div>
			</div>`;
	}

	renderSignedOut() {
		return `
			<button class="auth__action button button--icon-only" data-auth-action="open-login" aria-label="Admin login">
				<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-user-circle"></use></svg>
			</button>
			<dialog class="auth__dialog" id="auth-dialog" aria-labelledby="auth-title">
				<form class="auth__form">
					<header class="auth__header">
						<h2 id="auth-title" class="auth__title text-heading-sm">Admin Login</h2>
						<button class="auth__action button button--icon-only" type="button" data-auth-action="close-login" aria-label="Close">
							<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-x"></use></svg>
						</button>
					</header>
					<label class="auth__field">
						<span class="auth__field-label">Email</span>
						<input type="email" name="email" required autocomplete="email">
					</label>
					<label class="auth__field">
						<span class="auth__field-label">Password</span>
						<input type="password" name="password" required autocomplete="current-password">
					</label>
					<p class="auth__error" hidden></p>
					<div class="auth__actions">
						<button class="auth__action button button--secondary" type="button" data-auth-action="close-login">Cancel</button>
						<button class="button" type="submit">Sign In</button>
					</div>
				</form>
			</dialog>`;
	}
}
