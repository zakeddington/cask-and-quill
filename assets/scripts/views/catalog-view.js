import { html, stripHtml } from '../utils.js';
import { AUTH_CHANGE } from '../config/events.js';
import {
	CATALOG_FILL_OPTIONS,
	CATALOG_FILL_ICON_CONFIG,
	CATALOG_MASH_BILL_FIELDS,
	CATALOG_TASTING_NOTE_FIELDS,
	SPRITE_URL,
	KEY_ARROW_DOWN,
	KEY_ARROW_UP,
	KEY_HOME,
	KEY_END
} from '../config/constants.js';
import { ModalEditCatalog } from '../components/modal-edit-catalog.js';
import { fetchBottles, insertBottle, updateBottle, deleteBottle } from '../supabase.js';
import { CustomDropdown } from '../components/custom-dropdown.js';

export class CatalogView {
	constructor(elContainer, isAdmin = false) {
		this.el = {
			container: elContainer,
			catalog: elContainer.querySelector('#catalog'),
			count: elContainer.querySelector('#catalog-count'),
			searchInput: elContainer.querySelector('#catalog-search'),
			searchClear: elContainer.querySelector('#catalog-search-clear'),
			categorySelect: elContainer.querySelector('#catalog-category'),
			fillSelect: elContainer.querySelector('#catalog-fill'),
			sortSelect: elContainer.querySelector('#catalog-sort'),
			clearAllBtn: elContainer.querySelector('#catalog-clear-all'),
			addBtn: elContainer.querySelector('#catalog-add-btn'),
			modalRoot: elContainer.querySelector('#catalog-modal-root'),
		};

		this.state = {
			bottles: [],
			expandedId: null,
			searchQuery: '',
			categoryFilter: '',
			fillFilter: '',
			abvSort: '',
			isAdmin,
		};

		this.components = {
			categoryDropdown: null,
			fillDropdown: null,
			sortDropdown: null,
			modal: null,
		};

		this.init();
	}

	async init() {
		this.initModalEditCatalog();
		this.initFillSelect();
		this.initSortSelect();

		await this.fetchCatalogData();

		this.initCategorySelect();
		this.render();
		this.addEventListeners();
	}

	async fetchCatalogData() {
		const bottles = await fetchBottles().catch(err => {
			window.console.warn('Failed to load bottles from database.', err);
			return [];
		});
		this.state.bottles = bottles;
	}

	initModalEditCatalog() {
		if (this.el.modalRoot) {
			this.components.modal = new ModalEditCatalog(this.el.modalRoot, {
				onSave: (bottle) => this.onSave(bottle),
				onDelete: (id) => this.onDelete(id),
				isAdmin: () => this.state.isAdmin,
			});
		}
	}

	initFillSelect() {
		if (this.el.fillSelect) {
			this.components.fillDropdown = new CustomDropdown(this.el.fillSelect);

			this.components.fillDropdown.setOptions([
				{ value: '', label: 'Fill Level' },
				...CATALOG_FILL_OPTIONS
			]);
		}
	}

	initSortSelect() {
		if (this.el.sortSelect) {
			this.components.sortDropdown = new CustomDropdown(this.el.sortSelect);
		}
	}

	initCategorySelect() {
		if (this.el.categorySelect) {
			this.components.categoryDropdown = new CustomDropdown(this.el.categorySelect);

			const categories = [...new Set(this.state.bottles.map(b => b.category).filter(Boolean))].sort((a, b) => a.localeCompare(b));
			this.components.categoryDropdown.setOptions([
				{ value: '', label: 'Category' },
				...categories.map(c => ({ value: c, label: c }))
			]);
		}
	}

	addEventListeners() {
		this.el.catalog.addEventListener('click', event => this.onCatalogClick(event));
		this.el.catalog.addEventListener('keydown', event => this.onCatalogKeydown(event));
		this.el.searchInput?.addEventListener('input', event => this.onSearchInput(event));
		this.el.searchClear?.addEventListener('click', () => this.onSearchClear());
		this.el.categorySelect?.addEventListener('change', event => this.onCategoryChange(event));
		this.el.fillSelect?.addEventListener('change', event => this.onFillChange(event));
		this.el.sortSelect?.addEventListener('change', event => this.onSortChange(event));
		this.el.clearAllBtn?.addEventListener('click', () => this.onClearAll());
		this.el.addBtn?.addEventListener('click', () => this.openAddModal());

		window.addEventListener(AUTH_CHANGE, event => this.onAuthChange(event));
	}

	onAuthChange(event) {
		this.state.isAdmin = event.detail.isAdmin;
		this.render();
	}

	onCatalogClick(event) {
		const editButton = event.target.closest('[data-catalog-action="edit"]');
		if (editButton) {
			const bottle = this.getBottleById(editButton.dataset.bottleId);
			if (bottle) this.components.modal?.open(bottle);
			return;
		}

		const trigger = event.target.closest('.catalog-accordion-trigger');
		if (!trigger) return;

		this.toggleBottle(trigger.dataset.bottleId);
	}

	onCatalogKeydown(event) {
		if (!event.target.matches('.catalog-accordion-trigger')) return;

		const elTriggers = Array.from(this.el.catalog.querySelectorAll('.catalog-accordion-trigger'));
		const currentIndex = elTriggers.indexOf(event.target);
		let nextIndex = currentIndex;

		switch (event.key) {
			case KEY_ARROW_DOWN:
				nextIndex = (currentIndex + 1) % elTriggers.length;
				break;
			case KEY_ARROW_UP:
				nextIndex = (currentIndex - 1 + elTriggers.length) % elTriggers.length;
				break;
			case KEY_HOME:
				nextIndex = 0;
				break;
			case KEY_END:
				nextIndex = elTriggers.length - 1;
				break;
			default:
				return;
		}

		event.preventDefault();
		elTriggers[nextIndex].focus();
	}

	onSearchInput(event) {
		this.state.searchQuery = event.target.value.trim().toLowerCase();
		if (this.el.searchClear) this.el.searchClear.hidden = !this.state.searchQuery;
		this.updateClearAllVisibility();
		this.render();
	}

	onSearchClear() {
		this.el.searchInput.value = '';
		this.state.searchQuery = '';
		if (this.el.searchClear) this.el.searchClear.hidden = true;
		this.updateClearAllVisibility();
		this.render();
		this.el.searchInput.focus();
	}

	onCategoryChange(event) {
		this.state.categoryFilter = event.target.value;
		this.updateClearAllVisibility();
		this.render();
	}

	onFillChange(event) {
		this.state.fillFilter = event.target.value;
		this.updateClearAllVisibility();
		this.render();
	}

	onSortChange(event) {
		this.state.abvSort = event.target.value;
		this.render();
	}

	onClearAll() {
		this.el.searchInput.value = '';
		this.state.searchQuery = '';
		if (this.el.searchClear) this.el.searchClear.hidden = true;

		this.components.categoryDropdown?.selectOption('');
		this.components.fillDropdown?.selectOption('');

		this.updateClearAllVisibility();
		this.render();
	}

	updateClearAllVisibility() {
		if (!this.el.clearAllBtn) return;
		this.el.clearAllBtn.hidden = !(this.state.searchQuery || this.state.categoryFilter || this.state.fillFilter);
	}

	onDelete(id) {
		this.state.bottles = this.state.bottles.filter(bottle => bottle.id !== id);
		this.state.expandedId = this.state.expandedId === id ? null : this.state.expandedId;
		this.render();
		deleteBottle(id).catch(err => window.console.warn('Failed to delete bottle.', err));
	}

	onSave(updatedBottle) {
		if (!updatedBottle.id) {
			const maxId = Math.max(0, ...this.state.bottles.map(b => parseInt(b.id, 10) || 0));
			updatedBottle = { ...updatedBottle, id: String(maxId + 1).padStart(4, '0') };
			this.state.bottles = [...this.state.bottles, updatedBottle];
			insertBottle(updatedBottle).catch(err => window.console.warn('Failed to insert bottle.', err));
		} else {
			this.state.bottles = this.state.bottles.map(item => item.id === updatedBottle.id ? updatedBottle : item);
			this.saveBottle(updatedBottle);
		}
		this.render();
	}

	async saveBottle(bottle) {
		try {
			await updateBottle(bottle);
		} catch (error) {
			window.console.warn('Failed to save bottle.', error);
		}
	}

	openAddModal() {
		const newBottle = {
			id: '',
			fill: '',
			category: '',
			type: '',
			brand: '',
			bottle: '',
			barrel: '',
			age: '',
			abv: '',
			proof: '',
			cask: '',
			distillery: '',
			corpOwner: '',
			origin: '',
			char: '',
			mashBill: { corn: '', barley: '', maltedBarley: '', rye: '', maltedRye: '', wheat: '' },
			tastingNotes: { nose: '', palate: '', finish: '' }
		};
		this.components.modal?.open(newBottle, { isNew: true });
	}

	toggleBottle(id) {
		const previousId = this.state.expandedId;
		this.state.expandedId = previousId === id ? null : id;

		if (previousId) {
			this.setBottleExpanded(previousId, false);
		}
		if (this.state.expandedId) {
			this.setBottleExpanded(this.state.expandedId, true);
		}
	}

	setBottleExpanded(id, expanded) {
		const trigger = this.el.catalog.querySelector(`.catalog-accordion-trigger[data-bottle-id="${CSS.escape(id)}"]`);
		if (!trigger) return;

		const article = trigger.closest('.catalog-bottle');
		const panel = article?.querySelector('.catalog-panel');
		const heading = article?.querySelector('.catalog-bottle-heading');

		article?.classList.toggle('is-open', expanded);
		heading?.classList.toggle('theme-accent', expanded);
		trigger.setAttribute('aria-expanded', String(expanded));
		panel?.setAttribute('aria-hidden', String(!expanded));

		if (expanded) {
			setTimeout(() => {
				article.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
			}, 350);
		}
	}

	getBottleById(id) {
		return this.state.bottles.find(bottle => bottle.id === id);
	}

	getFilteredBottles() {
		return this.state.bottles.filter(bottle => {
			const matchesSearch = !this.state.searchQuery ||
				`${bottle.brand} ${bottle.bottle}`.toLowerCase().includes(this.state.searchQuery);
			const matchesCategory = !this.state.categoryFilter || bottle.category === this.state.categoryFilter;
			const matchesFill = !this.state.fillFilter || bottle.fill === this.state.fillFilter;
			return matchesSearch && matchesCategory && matchesFill;
		});
	}

	getGroupedBottles(bottles) {
		return bottles.reduce((groups, bottle) => {
			const key = bottle.category || 'Uncategorized';
			if (!groups[key]) groups[key] = [];
			groups[key].push(bottle);
			return groups;
		}, {});
	}

	render() {
		const filtered = this.getFilteredBottles();
		const activeBottles = filtered.filter(bottle => bottle.fill !== 'bottle-kill');
		const killedBottles = filtered.filter(bottle => bottle.fill === 'bottle-kill');
		const groupedBottles = this.getGroupedBottles(activeBottles);
		const groupNames = Object.keys(groupedBottles).sort((a, b) => a.localeCompare(b));

		if (this.el.addBtn) this.el.addBtn.hidden = !this.state.isAdmin;
		this.renderCount(activeBottles.length, killedBottles.length);

		const groupSections = groupNames.map(group => this.renderGroup(group, groupedBottles[group]));
		if (killedBottles.length) {
			groupSections.push(this.renderGroup('Bottle Kills', killedBottles, { isBottleKills: true }));
		}

		this.el.catalog.innerHTML = groupSections.length
			? groupSections.join('')
			: this.renderEmptyState();
	}

	renderCount(activeCount, killedCount) {
		if (!this.el.count) return;

		const totalActive = this.state.bottles.filter(bottle => bottle.fill !== 'bottle-kill').length;
		const isFiltered = this.state.searchQuery || this.state.categoryFilter || this.state.fillFilter;
		const suffix = isFiltered && activeCount !== totalActive ? ` of ${totalActive}` : '';
		const killedNote = killedCount
			? ` <span class="text-heading-sm font-regular">(${killedCount} killed)</span>`
			: '';
		this.el.count.innerHTML = `${activeCount}${suffix} bottle${totalActive === 1 ? '' : 's'}${killedNote}`;
	}

	renderEmptyState() {
		return (this.state.searchQuery || this.state.fillFilter)
			? `<div class="empty-state"><h2 class="text-heading-lg">No bottles match your filters.</h2></div>`
			: `<div class="empty-state"><h2 class="text-heading-lg">No bottles logged yet.</h2></div>`;
	}

	renderGroup(group, bottles, { isBottleKills = false } = {}) {
		const sortedBottles = [...bottles].sort((a, b) => {
			switch (this.state.abvSort) {
				case 'abv-asc': return (parseFloat(a.abv) || 0) - (parseFloat(b.abv) || 0);
				case 'abv-desc': return (parseFloat(b.abv) || 0) - (parseFloat(a.abv) || 0);
				case 'age-asc': return this.parseAge(a.age) - this.parseAge(b.age);
				case 'age-desc': return this.parseAge(b.age) - this.parseAge(a.age);
				default: return `${a.brand} ${a.bottle}`.localeCompare(`${b.brand} ${b.bottle}`);
			}
		});

		return `
			<section class="catalog-group${isBottleKills ? ' catalog-group-bottle-kills' : ''}">
				<div class="catalog-group-heading">
					<h2>${html(group)}</h2>
				</div>
				<div class="catalog-column-headings theme-primary" aria-hidden="true">
					<span>Fill</span>
					<span>Brand/Bottle</span>
					<span>Type/Category</span>
					<span>Specs</span>
					<span>Mash Bill</span>
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
		const isOpen = this.state.expandedId === bottle.id;
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
							<span class="text-heading-sm text-color-accent">${html(bottle.brand)}</span>
							<span class="text-body-md font-semibold">${html(bottle.bottle)}</span>
							${bottle.barrel ? `<span class="text-body-sm text-color-secondary">${html(bottle.barrel)}</span>` : ''}
						</span>
						<span class="catalog-bottle-heading-col">
							<span class="text-heading-sm font-medium text-color-secondary">${html(bottle.type)}</span>
							<span class="text-body-md">${html(bottle.category)}</span>
						</span>
						<span class="catalog-bottle-heading-col text-body-sm font-medium text-color-secondary">
							<span>${html(bottle.age)} Years</span>
							<span>${html(bottle.abv)}%</span>
							<span>${html(bottle.proof)}°</span>
						</span>
						<span class="catalog-bottle-heading-col text-body-sm font-medium">
							${this.renderMashBillSummary(bottle.mashBill)}
						</span>
						<span class="catalog-bottle-heading-col catalog-cask-heading">${bottle.cask}</span>
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
		const { icon, colorClass } = CATALOG_FILL_ICON_CONFIG[fill] || {};
		const label = this.getFillLabel(fill);
		if (!icon) return `<span>${html(label)}</span>`;
		return `
			<span class="catalog-fill-icon ${html(colorClass)}" title="${html(label)}" role="img">
				<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#${html(icon)}"></use></svg>
			</span>
		`;
	}

	getFillLabel(fill) {
		const option = CATALOG_FILL_OPTIONS.find(o => o.value === fill);
		return option ? option.label : fill || 'Unlisted';
	}

	renderJournalIcon(bottle) {
		const hasContent = this.hasJournalContent(bottle);
		const label = hasContent ? 'Journal notes entered' : 'No journal notes entered';

		return `
			<span class="catalog-journal-icon${hasContent ? ' has-content' : ' is-empty'}" title="${label}" role="img">
				<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#${hasContent ? 'icon-file-text' : 'icon-file'}"></use></svg>
			</span>
		`;
	}

	hasJournalContent(bottle) {
		return CATALOG_TASTING_NOTE_FIELDS.some(field => String(bottle.tastingNotes?.[field.name] ?? '').trim());
	}

	parseAge(age) {
		const first = String(age ?? '').replace(/[()]/g, '').split('-')[0].trim();
		const n = parseFloat(first);
		return Number.isFinite(n) ? n : 0;
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
				${this.state.isAdmin ? `
				<div class="catalog-detail-actions">
					<button class="button-primary" data-catalog-action="edit" data-bottle-id="${html(bottle.id)}" type="button">
						<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-pencil"></use></svg>
						Edit Entry
					</button>
				</div>` : ''}
			</div>
		`;
	}

	renderMashBillSummary(mashBill) {
		const active = CATALOG_MASH_BILL_FIELDS
			.map(field => {
				const raw = String(mashBill?.[field.name] ?? '');
				const estimated = raw.startsWith('(') && raw.endsWith(')');
				const value = estimated ? raw.slice(1, -1) : raw;
				const formatted = estimated ? `(${value}%)` : `${value}%`;
				return { label: field.label, value, formatted };
			})
			.filter(({ value }) => value && value !== '0')
			.sort((a, b) => parseFloat(b.value) - parseFloat(a.value));

		if (!active.length) return '<span>—</span>';

		return active.map(({ label, formatted }) => `<span class="catalog-mash-bill-summary"><span>${html(formatted)}</span> <span>${html(label)}</span></span>`).join('');
	}

	renderMashBill(mashBill, char) {
		const fields = CATALOG_MASH_BILL_FIELDS
			.map(field => {
				const raw = String(mashBill?.[field.name] ?? '');
				const estimated = raw.startsWith('(') && raw.endsWith(')');
				const display = estimated ? raw.slice(1, -1) : raw;
				return { field, estimated, display };
			})
			.sort((a, b) => (parseFloat(b.display) || 0) - (parseFloat(a.display) || 0));

		return `
			<dl class="catalog-detail-list is-horizontal">
				${fields.map(({ field, estimated, display }) => {
					const muted = !display || display === '0';
					const classes = [muted ? 'is-muted' : '', estimated ? 'is-estimated' : ''].filter(Boolean).join(' ');
					return `
					<div class="catalog-detail-list-item ${classes}">
						<svg class="svg-icon mash-bill-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#${field.icon}"></use></svg>
						<dt>${html(field.label)}</dt>
						<dd>${html(display || '0')}%</dd>
					</div>`;
				}).join('')}
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
				${CATALOG_TASTING_NOTE_FIELDS.map(field => `
					<div>
						<h5>
							<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#${field.icon}"></use></svg>
							${html(field.label)}
						</h5>
						${field.options
							? `<p>${html(notes?.[field.name])}</p>`
							: `<div class="catalog-rich-content">${notes?.[field.name] ?? ''}</div>`
						}
					</div>
				`).join('')}
			</div>
		`;
	}
}
