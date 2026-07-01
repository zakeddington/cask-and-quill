import { getSession, signIn, signOut } from '../supabase.js';

const SPRITE_URL = '/assets/images/icon-sprite.svg';

export class Auth {
	constructor(root, { onAuthChange }) {
		this.root = root;
		this.onAuthChange = onAuthChange;
		this.session = null;
		this._handleOutsideClick = this._handleOutsideClick.bind(this);
	}

	async init() {
		this.session = await getSession();
		this.render();
		this.root.addEventListener('click', event => this.handleClick(event));
		this.root.addEventListener('submit', event => this.handleSubmit(event));
		return !!this.session;
	}

	render() {
		this.root.innerHTML = this.session
			? `
				<div class="auth-user">
					<button class="button-icon-only is-signed-in" data-auth-action="toggle-menu" aria-label="Account menu" aria-expanded="false" aria-haspopup="true">
						<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-user-circle-fill"></use></svg>
					</button>
					<div class="auth-menu" hidden>
						<button class="auth-signout" data-auth-action="logout" type="button">Sign Out</button>
					</div>
				</div>`
			: `
				<button class="button-icon-only" data-auth-action="open-login" aria-label="Admin login">
					<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-user-circle"></use></svg>
				</button>
				<dialog class="auth-dialog" id="auth-dialog" aria-labelledby="auth-title">
					<form class="auth-form" data-auth-form>
						<header class="auth-header">
							<h2 id="auth-title" class="text-heading-sm">Admin Login</h2>
							<button class="button-icon-only" type="button" data-auth-action="close-login" aria-label="Close">
								<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-x"></use></svg>
							</button>
						</header>
						<label class="auth-field">
							<span>Email</span>
							<input type="email" name="email" required autocomplete="email">
						</label>
						<label class="auth-field">
							<span>Password</span>
							<input type="password" name="password" required autocomplete="current-password">
						</label>
						<p class="auth-error" data-auth-error hidden></p>
						<div class="auth-actions">
							<button class="button-secondary" type="button" data-auth-action="close-login">Cancel</button>
							<button class="button-primary" type="submit">Sign In</button>
						</div>
					</form>
				</dialog>`;
	}

	_handleOutsideClick(event) {
		if (!this.root.querySelector('.auth-user')?.contains(event.target)) {
			this._closeMenu();
		}
	}

	_openMenu() {
		const menu = this.root.querySelector('.auth-menu');
		const button = this.root.querySelector('[data-auth-action="toggle-menu"]');
		if (!menu || !button) return;
		menu.hidden = false;
		button.setAttribute('aria-expanded', 'true');
		document.addEventListener('click', this._handleOutsideClick);
	}

	_closeMenu() {
		const menu = this.root.querySelector('.auth-menu');
		const button = this.root.querySelector('[data-auth-action="toggle-menu"]');
		if (!menu || !button) return;
		menu.hidden = true;
		button.setAttribute('aria-expanded', 'false');
		document.removeEventListener('click', this._handleOutsideClick);
	}

	async handleClick(event) {
		const action = event.target.closest('[data-auth-action]')?.dataset.authAction;
		if (!action) return;

		if (action === 'open-login') {
			document.getElementById('auth-dialog')?.showModal();
		} else if (action === 'close-login') {
			document.getElementById('auth-dialog')?.close();
		} else if (action === 'toggle-menu') {
			const menu = this.root.querySelector('.auth-menu');
			if (menu?.hidden) {
				this._openMenu();
			} else {
				this._closeMenu();
			}
		} else if (action === 'logout') {
			this._closeMenu();
			await signOut();
			this.session = null;
			this.render();
			this.onAuthChange(false);
		}
	}

	async handleSubmit(event) {
		event.preventDefault();
		if (!event.target.matches('[data-auth-form]')) return;

		const formData = new FormData(event.target);
		const errorEl = this.root.querySelector('[data-auth-error]');

		try {
			errorEl.hidden = true;
			this.session = await signIn(
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
}
