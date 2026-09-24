import { initRichEditor } from './rich-editor.js';
import { getGlobalNotes, updateGlobalNotes } from '../supabase.js';
import { SPRITE_URL } from '../config/constants.js';
import { AUTH_CHANGE } from '../config/events.js';
import { BaseDrawer } from './drawer.js';

export class JournalDrawer extends BaseDrawer {
	constructor(triggerEl, options = {}) {
		super(triggerEl, options);

		this.el.body = this.el.drawer.querySelector('.drawer__body');
		this.el.footer = this.el.drawer.querySelector('.drawer__footer');

		this.state.content = '';
		this.state.isAdmin = this.options.isAdmin;
		this.state.isEditing = false;
		this.state.loadFailed = false;

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
		super.open();
		await this.loadContent();
	}

	async loadContent() {
		this.state.loadFailed = false;
		this.el.body.innerHTML = `<p class="drawer-journal__empty">Loading…</p>`;
		this.el.footer.innerHTML = '';

		try {
			this.state.content = await getGlobalNotes();
		} catch (err) {
			window.console.warn('Failed to load journal notes.', err);
			this.state.loadFailed = true;
		}

		this.renderBody();
		this.renderFooter();
	}

	close() {
		this.state.isEditing = false;
		super.close();
	}

	onJournalClick(event) {
		const action = event.target.closest('.drawer-journal__action')?.dataset.journalAction;
		if (action === 'retry') {
			this.loadContent();
		} else if (action === 'edit') {
			this.state.editStartContent = this.state.content;
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

		const wipesExistingContent = !newContent.trim() && this.state.editStartContent?.trim();
		if (wipesExistingContent && !window.confirm('This will clear all existing journal notes. Are you sure?')) {
			return;
		}

		const saveBtn = this.el.footer.querySelector('.drawer-journal__save-btn');
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
			this.el.body.innerHTML = `<div class="drawer-journal__rich-editor"></div>`;
			this.components.pellEditor = initRichEditor({
				element: this.el.body.querySelector('.drawer-journal__rich-editor'),
				value: this.state.content,
				onChange: () => {}
			});
		} else if (this.state.loadFailed) {
			this.el.body.innerHTML = `<p class="drawer-journal__empty">Couldn't load notes.</p>`;
		} else if (this.state.content) {
			this.el.body.innerHTML = `<div class="drawer-journal__text">${this.state.content}</div>`;
		} else {
			this.el.body.innerHTML = `<p class="drawer-journal__empty">No notes yet.</p>`;
		}
	}

	renderFooter() {
		if (this.state.isEditing) {
			this.el.footer.innerHTML = this.renderEditingFooter();
		} else if (this.state.loadFailed) {
			this.el.footer.innerHTML = `<button class="drawer-journal__action button button--secondary" type="button" data-journal-action="retry">Retry</button>`;
		} else if (this.state.isAdmin) {
			this.el.footer.innerHTML = this.renderAdminFooter();
		} else {
			this.el.footer.innerHTML = '';
		}
	}

	renderEditingFooter() {
		return `
			<button class="drawer-journal__action button button--secondary" type="button" data-journal-action="cancel">Cancel</button>
			<button class="drawer-journal__action drawer-journal__save-btn button" type="button" data-journal-action="save">Save Changes</button>
		`;
	}

	renderAdminFooter() {
		return `
			<button class="drawer-journal__action button button--secondary" type="button" data-journal-action="edit">
				<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-pencil"></use></svg>
				Edit
			</button>
		`;
	}
}
