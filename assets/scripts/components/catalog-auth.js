import { getSession, signIn, signOut } from '../supabase.js';

const SPRITE_URL = '/assets/images/icon-sprite.svg';

export class CatalogAuth {
	constructor(root, { onAuthChange }) {
		this.root = root;
		this.onAuthChange = onAuthChange;
		this.session = null;
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
				<button class="catalog-auth-button is-signed-in" data-auth-action="logout" aria-label="Sign out (admin)">
					<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-pencil"></use></svg>
				</button>`
			: `
				<button class="catalog-auth-button" data-auth-action="open-login" aria-label="Admin login">
					<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-pencil"></use></svg>
				</button>
				<dialog class="catalog-auth-dialog" id="catalog-auth-dialog" aria-labelledby="catalog-auth-title">
					<form class="catalog-auth-form" data-auth-form>
						<header class="catalog-auth-header">
							<h2 id="catalog-auth-title" class="text-heading-sm">Admin Login</h2>
							<button class="catalog-auth-close" type="button" data-auth-action="close-login" aria-label="Close">
								<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-x"></use></svg>
							</button>
						</header>
						<label class="catalog-auth-field">
							<span>Email</span>
							<input type="email" name="email" required autocomplete="email">
						</label>
						<label class="catalog-auth-field">
							<span>Password</span>
							<input type="password" name="password" required autocomplete="current-password">
						</label>
						<p class="catalog-auth-error" data-auth-error hidden></p>
						<div class="catalog-auth-actions">
							<button class="button-secondary" type="button" data-auth-action="close-login">Cancel</button>
							<button class="button-primary" type="submit">Sign In</button>
						</div>
					</form>
				</dialog>`;
	}

	async handleClick(event) {
		const action = event.target.closest('[data-auth-action]')?.dataset.authAction;
		if (!action) return;

		if (action === 'open-login') {
			document.getElementById('catalog-auth-dialog')?.showModal();
		} else if (action === 'close-login') {
			document.getElementById('catalog-auth-dialog')?.close();
		} else if (action === 'logout') {
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
			document.getElementById('catalog-auth-dialog')?.close();
			this.render();
			this.onAuthChange(true);
		} catch {
			errorEl.textContent = 'Invalid email or password.';
			errorEl.hidden = false;
		}
	}
}
