import { escapeHtml } from '../utils.js';
import { init as pellInit } from '../vendor/pell.js';
import { getGlobalNotes, updateGlobalNotes } from '../supabase.js';
import { SPRITE_URL } from '../config/constants.js';
import { BaseDrawer } from './drawer.js';

export class JournalDrawer extends BaseDrawer {
	constructor(drawerEl, overlayEl, isAdmin = false) {
		super(drawerEl, overlayEl);
		this.bodyEl = drawerEl.querySelector('.drawer-body');
		this.footerEl = drawerEl.querySelector('.drawer-footer');
		this.content = '';
		this.isAdmin = isAdmin;
		this.isEditing = false;
		this.init();
		this.setupEventListeners();
	}

	setupEventListeners() {
		this.drawerEl.addEventListener('click', e => this.handleClick(e));

		window.addEventListener('open-journal-drawer', () => this.open());

		window.addEventListener('auth-change', e => {
			this.isAdmin = e.detail.isAdmin;
			if (this.isOpen && !this.isEditing) this.renderFooter();
		});
	}

	async open() {
		this.isEditing = false;
		this.bodyEl.innerHTML = `<p class="drawer-journal-empty">Loading…</p>`;
		this.footerEl.innerHTML = '';

		super.open();

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
		super.close();
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
		const newContent = this.pellEditor?.content.innerHTML ?? '';

		const saveBtn = this.footerEl.querySelector('[data-journal-action="save"]');
		if (saveBtn) {
			saveBtn.disabled = true;
			saveBtn.textContent = 'Saving…';
		}

		try {
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
			this.bodyEl.innerHTML = `<div class="drawer-journal-rich-editor"></div>`;
			this.pellEditor = pellInit({
				element: this.bodyEl.querySelector('.drawer-journal-rich-editor'),
				onChange: () => {},
				actions: ['bold', 'italic', 'underline', 'olist', 'ulist'],
				defaultParagraphSeparator: 'p',
			});
			this.pellEditor.content.innerHTML = this.content;
		} else if (this.content) {
			this.bodyEl.innerHTML = `<div class="drawer-journal-text">${this.content}</div>`;
		} else {
			this.bodyEl.innerHTML = `<p class="drawer-journal-empty">No notes yet.</p>`;
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
