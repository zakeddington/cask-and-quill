import { CATALOG_BOTTLES } from '../data/catalog.js';
import { escapeHtml } from '../utils.js';

const STORAGE_KEY = 'caskAndQuill.catalogDrafts.v1';

const IDENTITY_FIELDS = [
	{ name: 'brand', label: 'Brand' },
	{ name: 'bottle', label: 'Bottle' },
	{ name: 'distillery', label: 'Distillery' },
	{ name: 'corpOwner', label: 'Corp. Owner' },
	{ name: 'origin', label: 'Origin' },
	{ name: 'category', label: 'Category' },
	{ name: 'type', label: 'Type' }
];

const SPEC_FIELDS = [
	{ name: 'fill', label: 'Fill' },
	{ name: 'age', label: 'Age' },
	{ name: 'abv', label: 'ABV' },
	{ name: 'proof', label: 'Proof' },
	{ name: 'char', label: 'Char Level' },
	{ name: 'cask', label: 'Cask / Finish / Notes', multiline: true }
];

const MASH_BILL_FIELDS = [
	{ name: 'corn', label: 'Corn' },
	{ name: 'barley', label: 'Barley' },
	{ name: 'maltedBarley', label: 'Malted Barley' },
	{ name: 'rye', label: 'Rye' },
	{ name: 'maltedRye', label: 'Malted Rye' },
	{ name: 'wheat', label: 'Wheat' }
];

const TASTING_NOTE_FIELDS = [
	{ name: 'nose', label: 'Nose' },
	{ name: 'palate', label: 'Palate' },
	{ name: 'finish', label: 'Finish' }
];

function cloneBottles(bottles) {
	return JSON.parse(JSON.stringify(bottles));
}

function html(value) {
	return escapeHtml(String(value ?? ''));
}

function getFormValue(formData, key) {
	return String(formData.get(key) ?? '').trim();
}

function getMashBillValue(formData, key) {
	const value = Number(formData.get(`mashBill.${key}`));
	return Number.isFinite(value) ? value : 0;
}

function getFillLabel(fill) {
	const labels = {
		plenty: 'Plenty',
		low: 'Low',
		empty: 'Empty'
	};

	return labels[fill] || fill || 'Unlisted';
}

function hasJournalContent(bottle) {
	return TASTING_NOTE_FIELDS.some(field => String(bottle.tastingNotes?.[field.name] ?? '').trim());
}

export class Catalog {
	constructor() {
		this.catalogList = document.getElementById('catalog-list');
		this.catalogCount = document.getElementById('catalog-count');
		this.modalRoot = document.getElementById('catalog-modal-root');
		this.bottles = this.loadBottles();
		this.expandedId = this.bottles[0]?.id || null;
		this.editingId = null;
		this.previousFocus = null;
	}

	init() {
		if (!this.catalogList) return;

		this.setupEventListeners();
		this.render();
	}

	setupEventListeners() {
		this.catalogList.addEventListener('click', event => this.handleCatalogClick(event));
		this.catalogList.addEventListener('keydown', event => this.handleCatalogKeydown(event));

		if (this.modalRoot) {
			this.modalRoot.addEventListener('click', event => this.handleModalClick(event));
			this.modalRoot.addEventListener('submit', event => this.handleModalSubmit(event));
		}

		document.addEventListener('keydown', event => {
			if (event.key === 'Escape' && this.editingId) {
				this.closeModal();
			}
		});
	}

	loadBottles() {
		try {
			const saved = window.localStorage.getItem(STORAGE_KEY);
			const parsed = saved ? JSON.parse(saved) : null;

			if (Array.isArray(parsed) && parsed.every(bottle => bottle?.id)) {
				return parsed;
			}
		} catch (error) {
			window.console.warn('Unable to load catalog drafts.', error);
		}

		return cloneBottles(CATALOG_BOTTLES);
	}

	saveBottles() {
		try {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.bottles));
		} catch (error) {
			window.console.warn('Unable to save catalog drafts.', error);
		}
	}

	handleCatalogClick(event) {
		const editButton = event.target.closest('[data-catalog-action="edit"]');
		if (editButton) {
			this.openModal(editButton.dataset.bottleId);
			return;
		}

		const trigger = event.target.closest('.catalog-accordion-trigger');
		if (!trigger) return;

		this.toggleBottle(trigger.dataset.bottleId);
	}

	handleCatalogKeydown(event) {
		if (!event.target.matches('.catalog-accordion-trigger')) return;

		const triggers = Array.from(this.catalogList.querySelectorAll('.catalog-accordion-trigger'));
		const currentIndex = triggers.indexOf(event.target);
		let nextIndex = currentIndex;

		if (event.key === 'ArrowDown') {
			nextIndex = (currentIndex + 1) % triggers.length;
		} else if (event.key === 'ArrowUp') {
			nextIndex = (currentIndex - 1 + triggers.length) % triggers.length;
		} else if (event.key === 'Home') {
			nextIndex = 0;
		} else if (event.key === 'End') {
			nextIndex = triggers.length - 1;
		} else {
			return;
		}

		event.preventDefault();
		triggers[nextIndex].focus();
	}

	handleModalClick(event) {
		if (event.target.closest('[data-close-modal]')) {
			this.closeModal();
		}
	}

	handleModalSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const formData = new FormData(form);
		const bottle = this.getBottleById(this.editingId);
		if (!bottle) return;

		const updatedBottle = {
			...bottle,
			fill: getFormValue(formData, 'fill'),
			category: getFormValue(formData, 'category'),
			type: getFormValue(formData, 'type'),
			brand: getFormValue(formData, 'brand'),
			bottle: getFormValue(formData, 'bottle'),
			age: getFormValue(formData, 'age'),
			abv: getFormValue(formData, 'abv'),
			proof: getFormValue(formData, 'proof'),
			cask: getFormValue(formData, 'cask'),
			distillery: getFormValue(formData, 'distillery'),
			corpOwner: getFormValue(formData, 'corpOwner'),
			origin: getFormValue(formData, 'origin'),
			char: getFormValue(formData, 'char'),
			mashBill: MASH_BILL_FIELDS.reduce((mashBill, field) => {
				mashBill[field.name] = getMashBillValue(formData, field.name);
				return mashBill;
			}, {}),
			tastingNotes: TASTING_NOTE_FIELDS.reduce((notes, field) => {
				notes[field.name] = getFormValue(formData, `tastingNotes.${field.name}`);
				return notes;
			}, {})
		};

		this.bottles = this.bottles.map(item => item.id === updatedBottle.id ? updatedBottle : item);
		this.saveBottles();
		this.closeModal();
		this.render();
	}

	toggleBottle(id) {
		const previousId = this.expandedId;
		this.expandedId = previousId === id ? null : id;

		if (previousId) {
			this.setBottleExpanded(previousId, false);
		}
		if (this.expandedId) {
			this.setBottleExpanded(this.expandedId, true);
		}
	}

	setBottleExpanded(id, expanded) {
		const trigger = this.catalogList.querySelector(`.catalog-accordion-trigger[data-bottle-id="${CSS.escape(id)}"]`);
		if (!trigger) return;

		const article = trigger.closest('.catalog-bottle');
		const panel = article?.querySelector('.catalog-panel');
		const heading = article?.querySelector('.catalog-bottle-heading');

		article?.classList.toggle('is-open', expanded);
		heading?.classList.toggle('theme-accent', expanded);
		trigger.setAttribute('aria-expanded', String(expanded));
		panel?.setAttribute('aria-hidden', String(!expanded));
	}

	openModal(id) {
		const bottle = this.getBottleById(id);
		if (!bottle || !this.modalRoot) return;

		this.editingId = id;
		this.previousFocus = document.activeElement;
		this.modalRoot.innerHTML = this.renderModal(bottle);
		document.body.classList.add('catalog-modal-is-open');
		this.modalRoot.querySelector('.catalog-modal-close')?.focus();
	}

	closeModal() {
		if (!this.modalRoot) return;

		this.modalRoot.innerHTML = '';
		this.editingId = null;
		document.body.classList.remove('catalog-modal-is-open');
		this.previousFocus?.focus?.();
		this.previousFocus = null;
	}

	getBottleById(id) {
		return this.bottles.find(bottle => bottle.id === id);
	}

	groupBottles() {
		return this.bottles.reduce((groups, bottle) => {
			const key = bottle.category || 'Uncategorized';
			if (!groups[key]) groups[key] = [];
			groups[key].push(bottle);
			return groups;
		}, {});
	}

	render() {
		const groupedBottles = this.groupBottles();
		const groupNames = Object.keys(groupedBottles).sort((a, b) => a.localeCompare(b));

		this.renderCount();
		this.catalogList.innerHTML = groupNames.length
			? groupNames.map(group => this.renderGroup(group, groupedBottles[group])).join('')
			: this.renderEmptyState();
	}

	renderCount() {
		if (!this.catalogCount) return;

		const count = this.bottles.length;
		this.catalogCount.textContent = `${count} bottle${count === 1 ? '' : 's'}`;
	}

	renderEmptyState() {
		return `
			<div class="catalog-empty-state">
				<h2>No bottles logged yet.</h2>
			</div>
		`;
	}

	renderGroup(group, bottles) {
		const sortedBottles = [...bottles].sort((a, b) => `${a.brand} ${a.bottle}`.localeCompare(`${b.brand} ${b.bottle}`));

		return `
			<section class="catalog-group">
				<div class="catalog-group-heading">
					<h2>${html(group)}</h2>
				</div>
				<div class="catalog-column-headings theme-primary" aria-hidden="true">
					<span>Fill</span>
					<span>Category/Type</span>
					<span>Brand/Bottle</span>
					<span>Specs</span>
					<span>Cask/Finish/Notes</span>
					<span>Journal</span>
				</div>
				<div class="catalog-bottles">
					${sortedBottles.map(bottle => this.renderBottle(bottle)).join('')}
				</div>
			</section>
		`;
	}

	renderBottle(bottle) {
		const isOpen = this.expandedId === bottle.id;
		const triggerId = `catalog-trigger-${bottle.id}`;
		const panelId = `catalog-panel-${bottle.id}`;

		return `
			<article class="catalog-bottle${isOpen ? ' is-open' : ''}">
				<h3 class="catalog-bottle-heading${isOpen ? ' theme-accent' : ''}">
					<button
						aria-controls="${html(panelId)}"
						aria-expanded="${isOpen}"
						class="catalog-accordion-trigger"
						data-bottle-id="${html(bottle.id)}"
						id="${html(triggerId)}"
						type="button"
					>
						<span class="catalog-bottle-heading-col catalog-fill-${html(bottle.fill)}">${html(getFillLabel(bottle.fill))}</span>
						<span class="catalog-bottle-heading-col">
							<span class="text-heading-sm text-color-accent">${html(bottle.category)}</span>
							<span class="text-body-md">${html(bottle.type)}</span>
						</span>
						<span class="catalog-bottle-heading-col">
							<span class="text-heading-sm text-color-accent">${html(bottle.brand)}</span>
							<span class="text-body-md">${html(bottle.bottle)}</span>
						</span>
						<span class="catalog-bottle-heading-col text-color-accent text-body-xs">
							<span>${html(bottle.age)}</span>
							<span>${html(bottle.abv)} ABV</span>
							<span>${html(bottle.proof)} Proof</span>
						</span>
						<span class="catalog-bottle-heading-col text-body-sm">${html(bottle.cask)}</span>
						<span class="catalog-journal-status">
							${this.renderJournalIcon(bottle)}
							<span class="catalog-accordion-icon" aria-hidden="true">▼</span>
						</span>
					</button>
				</h3>

				<div
					aria-hidden="${!isOpen}"
					aria-labelledby="${html(triggerId)}"
					class="catalog-panel"
					id="${html(panelId)}"
					role="region"
				>
					<div class="catalog-panel-inner">
						${this.renderDetails(bottle)}
					</div>
				</div>
			</article>
		`;
	}

	renderJournalIcon(bottle) {
		const hasContent = hasJournalContent(bottle);
		const label = hasContent ? 'Journal notes entered' : 'No journal notes entered';
		const lines = hasContent
			? `
				<path d="M9 10.5h6" />
				<path d="M9 13.5h6" />
				<path d="M9 16.5h4" />
			`
			: '';

		return `
			<span class="catalog-journal-icon${hasContent ? ' has-content' : ' is-empty'}" aria-label="${label}" role="img">
				<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
					<path d="M7 3.75h7l4 4v12.5H7z" />
					<path d="M14 3.75v4h4" />
					${lines}
				</svg>
			</span>
		`;
	}

	renderDetails(bottle) {
		const details = [
			{ label: 'Distillery', value: bottle.distillery },
			{ label: 'Corp. Owner', value: bottle.corpOwner },
			{ label: 'Origin', value: bottle.origin },
		];

		return `
			<div class="catalog-detail-grid">
				<section class="catalog-detail-block">
					<h4 class="text-body-md text-color-secondary">Brand Details</h4>
					<dl class="catalog-detail-list">
						${details.map(item => `
							<div class="catalog-detail-list-item">
								<dt>${html(item.label)}</dt>
								<dd>${html(item.value)}</dd>
							</div>
						`).join('')}
					</dl>
					<button class="catalog-edit-button button" data-catalog-action="edit" data-bottle-id="${html(bottle.id)}" type="button">Edit Entry</button>
				</section>
				<section class="catalog-detail-block">
					<h4 class="text-body-md text-color-secondary">Mash Bill</h4>
					${this.renderMashBill(bottle.mashBill, bottle.char)}
				</section>
				<section class="catalog-detail-block catalog-tasting-block">
					<h4 class="text-label">Journal</h4>
					${this.renderTastingNotes(bottle.tastingNotes)}
				</section>
			</div>
		`;
	}

	renderMashBill(mashBill, char) {
		return `
			<dl class="catalog-detail-list is-horizontal">
				${MASH_BILL_FIELDS.map(field => `
					<div class="catalog-detail-list-item ${Number(mashBill?.[field.name]) === 0 ? 'is-muted' : ''}">
						<dt>${html(field.label)}</dt>
						<dd>${html(mashBill?.[field.name] ?? 0)}%</dd>
					</div>
				`).join('')}
				<div class="catalog-detail-list-item ${char === 'N/A' ? 'is-muted' : ''}">
					<dt>Char Level</dt>
					<dd>${html(char)}</dd>
				</div>
			</dl>
		`;
	}

	renderTastingNotes(notes) {
		return `
			<div class="catalog-tasting-notes">
				${TASTING_NOTE_FIELDS.map(field => `
					<div>
						<h5>${html(field.label)}</h5>
						<p>${html(notes?.[field.name])}</p>
					</div>
				`).join('')}
			</div>
		`;
	}

	renderModal(bottle) {
		return `
			<div class="catalog-modal" role="dialog" aria-modal="true" aria-labelledby="catalog-modal-title">
				<button class="catalog-modal-overlay" type="button" data-close-modal aria-label="Close edit modal"></button>
				<form class="catalog-modal-panel" data-catalog-edit-form>
					<header class="catalog-modal-header">
						<div>
							<p class="text-label">Bottle Log ID: #${html(bottle.id)}</p>
							<h2 id="catalog-modal-title">Edit Bottle Entry</h2>
						</div>
						<button class="catalog-modal-close" type="button" data-close-modal aria-label="Close edit modal">×</button>
					</header>

					<div class="catalog-modal-body">
						${this.renderFieldset('Bottle Identity', IDENTITY_FIELDS, bottle)}
						${this.renderFieldset('Technical Specs', SPEC_FIELDS, bottle)}
						${this.renderMashBillFieldset(bottle)}
						${this.renderTastingFieldset(bottle)}
					</div>

					<footer class="catalog-modal-footer">
						<button class="button catalog-secondary-button" type="button" data-close-modal>Cancel</button>
						<button class="button catalog-primary-button" type="submit">Save Changes</button>
					</footer>
				</form>
			</div>
		`;
	}

	renderFieldset(title, fields, bottle) {
		return `
			<fieldset class="catalog-fieldset">
				<legend>${html(title)}</legend>
				<div class="catalog-form-grid">
					${fields.map(field => this.renderField(field, bottle[field.name])).join('')}
				</div>
			</fieldset>
		`;
	}

	renderMashBillFieldset(bottle) {
		return `
			<fieldset class="catalog-fieldset">
				<legend>Mash Bill %</legend>
				<div class="catalog-form-grid catalog-form-grid-compact">
					${MASH_BILL_FIELDS.map(field => this.renderField({
						...field,
						name: `mashBill.${field.name}`,
						type: 'number'
					}, bottle.mashBill?.[field.name] ?? 0)).join('')}
				</div>
			</fieldset>
		`;
	}

	renderTastingFieldset(bottle) {
		return `
			<fieldset class="catalog-fieldset">
				<legend>Tasting Journal</legend>
				<div class="catalog-form-stack">
					${TASTING_NOTE_FIELDS.map(field => this.renderField({
						...field,
						name: `tastingNotes.${field.name}`,
						multiline: true
					}, bottle.tastingNotes?.[field.name])).join('')}
				</div>
			</fieldset>
		`;
	}

	renderField(field, value) {
		const fieldId = `catalog-field-${field.name.replace(/\./g, '-')}`;
		const input = field.multiline
			? `<textarea id="${html(fieldId)}" name="${html(field.name)}" rows="4">${html(value)}</textarea>`
			: `<input id="${html(fieldId)}" name="${html(field.name)}" type="${html(field.type || 'text')}" value="${html(value)}">`;

		return `
			<label class="catalog-field" for="${html(fieldId)}">
				<span>${html(field.label)}</span>
				${input}
			</label>
		`;
	}
}
