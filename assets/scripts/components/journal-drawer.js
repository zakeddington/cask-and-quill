import { escapeHtml } from '../utils.js';
import { getGlobalNotes, updateGlobalNotes } from '../supabase.js';

const SPRITE_URL = '/assets/images/icon-sprite.svg';

export class JournalDrawer {
	constructor(drawerEl, overlayEl, isAdmin = false) {
		this.drawerEl = drawerEl;
		this.overlayEl = overlayEl;
		this.bodyEl = drawerEl.querySelector('.journal-drawer-body');
		this.footerEl = drawerEl.querySelector('.journal-drawer-footer');
		this.content = '';
		this.isAdmin = isAdmin;
		this.isOpen = false;
		this.isEditing = false;
		this.setupEventListeners();
	}

	setupEventListeners() {
		this.overlayEl.addEventListener('click', () => this.close());
		this.drawerEl.querySelector('.journal-drawer-close').addEventListener('click', () => this.close());
		this.drawerEl.addEventListener('click', e => this.handleClick(e));

		document.addEventListener('keydown', e => {
			if (e.key === 'Escape' && this.isOpen) this.close();
		});

		window.addEventListener('open-journal-drawer', () => this.open());

		window.addEventListener('auth-change', e => {
			this.isAdmin = e.detail.isAdmin;
			if (this.isOpen && !this.isEditing) this.renderFooter();
		});
	}

	async open() {
		this.isEditing = false;
		this.bodyEl.innerHTML = `<p class="journal-drawer-empty">Loading…</p>`;
		this.footerEl.innerHTML = '';

		this.drawerEl.classList.add('is-open');
		this.overlayEl.classList.add('is-open');
		this.drawerEl.setAttribute('aria-hidden', 'false');
		document.body.classList.add('journal-drawer-is-open');
		this.isOpen = true;

		try {
			this.content = await getGlobalNotes();
		} catch {
			this.content = '';
		}

		this.renderBody();
		this.renderFooter();
	}

	close() {
		this.isEditing = false;
		this.drawerEl.classList.remove('is-open');
		this.overlayEl.classList.remove('is-open');
		this.drawerEl.setAttribute('aria-hidden', 'true');
		document.body.classList.remove('journal-drawer-is-open');
		this.isOpen = false;
	}

	handleClick(e) {
		const action = e.target.closest('[data-journal-action]')?.dataset.journalAction;
		if (action === 'edit') {
			this.isEditing = true;
			this.renderBody();
			this.renderFooter();
		} else if (action === 'cancel') {
			this.isEditing = false;
			this.renderBody();
			this.renderFooter();
		} else if (action === 'save') {
			this.handleSave();
		}
	}

	async handleSave() {
		const textarea = this.bodyEl.querySelector('textarea');
		if (!textarea) return;

		const saveBtn = this.footerEl.querySelector('[data-journal-action="save"]');
		if (saveBtn) {
			saveBtn.disabled = true;
			saveBtn.textContent = 'Saving…';
		}

		try {
			const newContent = textarea.value;
			await updateGlobalNotes(newContent);
			this.content = newContent;
			this.isEditing = false;
			this.renderBody();
			this.renderFooter();
		} catch (err) {
			window.console.warn('Failed to save journal notes', err);
			if (saveBtn) {
				saveBtn.disabled = false;
				saveBtn.textContent = 'Save Changes';
			}
		}
	}

	renderBody() {
		if (this.isEditing) {
			this.bodyEl.innerHTML = `<textarea class="journal-drawer-textarea">${escapeHtml(this.content)}</textarea>`;
		} else if (this.content) {
			this.bodyEl.innerHTML = `<p class="journal-drawer-text">${escapeHtml(this.content)}</p>`;
		} else {
			this.bodyEl.innerHTML = `<p class="journal-drawer-empty">No notes yet.</p>`;
		}
	}

	renderFooter() {
		if (this.isEditing) {
			this.footerEl.innerHTML = `
				<button class="button-secondary" type="button" data-journal-action="cancel">Cancel</button>
				<button class="button-primary" type="button" data-journal-action="save">Save Changes</button>
			`;
		} else if (this.isAdmin) {
			this.footerEl.innerHTML = `
				<button class="button-secondary" type="button" data-journal-action="edit">
					<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-pencil"></use></svg>
					Edit
				</button>
			`;
		} else {
			this.footerEl.innerHTML = '';
		}
	}
}
