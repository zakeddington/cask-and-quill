import { CATALOG_BOTTLES } from '../data/catalog.js';
import { escapeHtml } from '../utils.js';
import {
	FILL_OPTIONS,
	FILL_ICON_CONFIG,
	MASH_BILL_FIELDS,
	TASTING_NOTE_FIELDS,
	SPRITE_URL
} from './catalog-constants.js';
import { CatalogModal } from './catalog-modal.js';

const STORAGE_KEY = 'caskAndQuill.catalogDrafts.v1';

function cloneBottles(bottles) {
	return JSON.parse(JSON.stringify(bottles));
}

function html(value) {
	return escapeHtml(String(value ?? ''));
}

function getFillLabel(fill) {
	const option = FILL_OPTIONS.find(o => o.value === fill);
	return option ? option.label : fill || 'Unlisted';
}

function hasJournalContent(bottle) {
	return TASTING_NOTE_FIELDS.some(field => String(bottle.tastingNotes?.[field.name] ?? '').trim());
}

export class Catalog {
	constructor() {
		this.catalogList = document.getElementById('catalog-list');
		this.catalogCount = document.getElementById('catalog-count');
		const modalRoot = document.getElementById('catalog-modal-root');
		this.bottles = this.loadBottles();
		this.expandedId = null;
		this.modal = modalRoot ? new CatalogModal(modalRoot, {
			onSave: (bottle) => this.handleSave(bottle)
		}) : null;
	}

	init() {
		if (!this.catalogList) return;

		this.setupEventListeners();
		this.render();
	}

	setupEventListeners() {
		this.catalogList.addEventListener('click', event => this.handleCatalogClick(event));
		this.catalogList.addEventListener('keydown', event => this.handleCatalogKeydown(event));
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
			const bottle = this.getBottleById(editButton.dataset.bottleId);
			if (bottle) this.modal?.open(bottle);
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

	handleSave(updatedBottle) {
		this.bottles = this.bottles.map(item => item.id === updatedBottle.id ? updatedBottle : item);
		this.saveBottles();
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
						<span class="catalog-bottle-heading-col">${this.renderFillIcon(bottle.fill)}</span>
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
							<span class="catalog-accordion-icon" aria-hidden="true">
								<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-caret-down"></use></svg>
							</span>
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

	renderFillIcon(fill) {
		const { icon, colorClass } = FILL_ICON_CONFIG[fill] || {};
		const label = getFillLabel(fill);
		if (!icon) return `<span>${html(label)}</span>`;
		return `
			<span class="catalog-fill-icon ${html(colorClass)}" aria-label="${html(label)}" role="img">
				<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#${html(icon)}"></use></svg>
			</span>
		`;
	}

	renderJournalIcon(bottle) {
		const hasContent = hasJournalContent(bottle);
		const label = hasContent ? 'Journal notes entered' : 'No journal notes entered';

		return `
			<span class="catalog-journal-icon${hasContent ? ' has-content' : ' is-empty'}" aria-label="${label}" role="img">
				<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#${hasContent ? 'icon-file-text' : 'icon-file'}"></use></svg>
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
				</section>
				<section class="catalog-detail-block">
					<h4 class="text-body-md text-color-secondary">Mash Bill</h4>
					${this.renderMashBill(bottle.mashBill, bottle.char)}
				</section>
				<section class="catalog-detail-block catalog-tasting-block">
					<h4 class="text-body-md text-color-secondary">Journal</h4>
					${this.renderTastingNotes(bottle.tastingNotes)}
				</section>
				<div class="catalog-detail-actions">
					<button class="catalog-edit-button button-primary" data-catalog-action="edit" data-bottle-id="${html(bottle.id)}" type="button">Edit Entry</button>
				</div>
			</div>
		`;
	}

	renderMashBill(mashBill, char) {
		return `
			<dl class="catalog-detail-list is-horizontal">
				${MASH_BILL_FIELDS.map(field => `
					<div class="catalog-detail-list-item ${Number(mashBill?.[field.name]) === 0 ? 'is-muted' : ''}">
						<svg class="svg-icon mash-bill-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#${field.icon}"></use></svg>
						<dt>${html(field.label)}</dt>
						<dd>${html(mashBill?.[field.name] ?? 0)}%</dd>
					</div>
				`).join('')}
				<div class="catalog-detail-list-item ${char === 'N/A' ? 'is-muted' : ''}">
					<svg class="svg-icon mash-bill-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-barrel"></use></svg>
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
						<h5>
							<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#${field.icon}"></use></svg>
							${html(field.label)}
						</h5>
						<p>${html(notes?.[field.name])}</p>
					</div>
				`).join('')}
			</div>
		`;
	}
}
