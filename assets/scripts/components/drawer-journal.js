import { init as pellInit } from '../vendor/pell.js';
import { getGlobalNotes, updateGlobalNotes } from '../supabase.js';
import { SPRITE_URL } from '../config/constants.js';
import { AUTH_CHANGE } from '../config/events.js';
import { BaseDrawer } from './drawer.js';

export class JournalDrawer extends BaseDrawer {
	constructor(triggerEl, options = {}) {
		super(triggerEl, options);

		this.el.body = this.el.drawer.querySelector('.drawer-body');
		this.el.footer = this.el.drawer.querySelector('.drawer-footer');

		this.state.content = '';
		this.state.isAdmin = this.options.isAdmin;
		this.state.isEditing = false;

		this.components = {
			pellEditor: null,
		};
	}

	addEventListeners() {
		super.addEventListeners();
		this.el.drawer.addEventListener('click', event => this.onJournalClick(event));
		window.addEventListener(AUTH_CHANGE, event => this.onAuthChange(event));
	}

	onAuthChange(event) {
		this.state.isAdmin = event.detail.isAdmin;
		if (this.state.isOpen && !this.state.isEditing) this.renderFooter();
	}

	async open() {
		this.state.isEditing = false;
		this.el.body.innerHTML = `<p class="drawer-journal-empty">Loading…</p>`;
		this.el.footer.innerHTML = '';

		super.open();

		try {
			this.state.content = await getGlobalNotes();
		} catch {
			this.state.content = '';
		}

		this.renderBody();
		this.renderFooter();
	}

	close() {
		this.state.isEditing = false;
		super.close();
	}

	onJournalClick(event) {
		const action = event.target.closest('[data-journal-action]')?.dataset.journalAction;
		if (action === 'edit') {
			this.state.isEditing = true;
			this.renderBody();
			this.renderFooter();
		} else if (action === 'cancel') {
			this.state.isEditing = false;
			this.renderBody();
			this.renderFooter();
		} else if (action === 'save') {
			this.onSave();
		}
	}

	async onSave() {
		const newContent = this.components.pellEditor?.content.innerHTML ?? '';

		const saveBtn = this.el.footer.querySelector('[data-journal-action="save"]');
		if (saveBtn) {
			saveBtn.disabled = true;
			saveBtn.textContent = 'Saving…';
		}

		try {
			await updateGlobalNotes(newContent);
			this.state.content = newContent;
			this.state.isEditing = false;
			this.renderBody();
			this.renderFooter();
		} catch (err) {
			window.console.warn('Failed to save journal notes.', err);
			if (saveBtn) {
				saveBtn.disabled = false;
				saveBtn.textContent = 'Save Changes';
			}
		}
	}

	renderBody() {
		if (this.state.isEditing) {
			this.el.body.innerHTML = `<div class="drawer-journal-rich-editor"></div>`;
			this.components.pellEditor = pellInit({
				element: this.el.body.querySelector('.drawer-journal-rich-editor'),
				onChange: () => {},
				actions: ['bold', 'italic', 'underline', 'olist', 'ulist'],
				defaultParagraphSeparator: 'p',
			});
			this.components.pellEditor.content.innerHTML = this.state.content;
		} else if (this.state.content) {
			this.el.body.innerHTML = `<div class="drawer-journal-text">${this.state.content}</div>`;
		} else {
			this.el.body.innerHTML = `<p class="drawer-journal-empty">No notes yet.</p>`;
		}
	}

	renderFooter() {
		if (this.state.isEditing) {
			this.el.footer.innerHTML = this.renderEditingFooter();
		} else if (this.state.isAdmin) {
			this.el.footer.innerHTML = this.renderAdminFooter();
		} else {
			this.el.footer.innerHTML = '';
		}
	}

	renderEditingFooter() {
		return `
			<button class="button-secondary" type="button" data-journal-action="cancel">Cancel</button>
			<button class="button-primary" type="button" data-journal-action="save">Save Changes</button>
		`;
	}

	renderAdminFooter() {
		return `
			<button class="button-secondary" type="button" data-journal-action="edit">
				<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-pencil"></use></svg>
				Edit
			</button>
		`;
	}
}
