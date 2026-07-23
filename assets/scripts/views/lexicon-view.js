import { LEXICON_TERMS, LEXICON_CATEGORIES, getLexiconCategoryOptions } from '../data/lexicon-data.js';
import { escapeHtml, normalizeTermName } from '../utils.js';
import { CustomDropdown } from '../components/custom-dropdown.js';

export class LexiconView {
	constructor(elContainer) {
		this.data = LEXICON_TERMS;

		this.el = {
			header: document.querySelector('.header'),
			container: elContainer,
			navLinks: elContainer.querySelectorAll('.lexicon-nav-link'),
			pageControls: elContainer.querySelector('.page-controls'),
			searchInput: elContainer.querySelector('#search-input'),
			searchClear: elContainer.querySelector('#search-clear'),
			categorySelect: elContainer.querySelector('#category-select'),
			results: elContainer.querySelector('#lexicon-entries'),
		};

		this.state = {
			searchQuery: '',
			selectedCategory: '',
		};

		this.config = {
			searchDebounceDelay: 250,
			resizeDebounceDelay: 150,
			stickyOffsetProperty: '--layout-scroll-header-lexicon-controls-offset',
		};

		this.timer = {
			search: null,
			resize: null,
		};

		this.components = {
			categoryDropdown: null,
		};

		this.init();
	}

	init() {
		this.initCategorySelect();
		this.addEventListeners();
		this.render();
		this.updateStickyOffset();
		this.scrollToHash();
	}

	initCategorySelect() {
		if (this.el.categorySelect) {
			this.components.categoryDropdown = new CustomDropdown(this.el.categorySelect);
			this.components.categoryDropdown.setOptions(getLexiconCategoryOptions());
		}
	}

	scrollToHash() {
		if (!location.hash) return;

		const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
		if (target) target.scrollIntoView({ block: 'start' });
	}

	clearHash() {
		if (!location.hash) return;
		history.replaceState(null, '', location.pathname + location.search);
	}

	updateStickyOffset() {
		if (!this.el.header || !this.el.pageControls) return;

		const marginBottom = parseFloat(getComputedStyle(this.el.pageControls).marginBottom) || 0;
		const offset = this.el.header.getBoundingClientRect().height + this.el.pageControls.getBoundingClientRect().height + marginBottom;

		document.documentElement.style.setProperty(this.config.stickyOffsetProperty, `${offset}px`);
	}

	updateNav(filteredTerms) {
		const activeLetters = new Set(filteredTerms.map(t => t.letter));

		this.el.navLinks.forEach(link => {
			const letter = link.textContent.trim();
			link.classList.toggle('active', activeLetters.has(letter));
		});
	}

	addEventListeners() {
		if (this.el.searchInput) {
			this.el.searchInput.addEventListener('input', event => this.onSearchInput(event));
		}

		if (this.el.searchClear) {
			this.el.searchClear.addEventListener('click', () => this.onSearchClear());
		}

		if (this.el.categorySelect) {
			this.el.categorySelect.addEventListener('change', event => this.onCategoryChange(event));
		}

		window.addEventListener('resize', () => this.onResize());
	}

	onResize() {
		window.clearTimeout(this.timer.resize);
		this.timer.resize = window.setTimeout(() => this.updateStickyOffset(), this.config.resizeDebounceDelay);
	}

	onSearchInput(event) {
		const nextQuery = event.target.value.toLowerCase();
		if (this.el.searchClear) this.el.searchClear.hidden = !nextQuery;

		window.clearTimeout(this.timer.search);
		this.timer.search = window.setTimeout(() => {
			this.state.searchQuery = nextQuery;
			this.clearHash();
			this.render(true);
		}, this.config.searchDebounceDelay);
	}

	onSearchClear() {
		window.clearTimeout(this.timer.search);
		this.el.searchInput.value = '';
		this.state.searchQuery = '';
		if (this.el.searchClear) this.el.searchClear.hidden = true;
		this.clearHash();
		this.render(true);
		this.el.searchInput.focus();
	}

	onCategoryChange(event) {
		this.state.selectedCategory = event.target.value;
		this.clearHash();
		this.render(true);
	}

	scrollResultsToTop() {
		this.el.results.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}

	getTermByName(name) {
		const normalizedName = normalizeTermName(name);
		return this.data.find(term =>
			normalizeTermName(term.name) === normalizedName ||
			term.aliases?.some(alias => normalizeTermName(alias) === normalizedName)
		);
	}

	getCategoryOrder(category) {
		const index = LEXICON_CATEGORIES.indexOf(category);
		return index === -1 ? LEXICON_CATEGORIES.length : index;
	}

	getCategoryId(category) {
		return `category-${normalizeTermName(category).replace(/\s+/g, '-')}`;
	}

	getFilteredTerms() {
		return this.data.filter(term =>
			(!this.state.selectedCategory || term.category === this.state.selectedCategory) &&
			(
				term.name.toLowerCase().includes(this.state.searchQuery) ||
				term.aliases?.some(alias => alias.toLowerCase().includes(this.state.searchQuery)) ||
				term.category.toLowerCase().includes(this.state.searchQuery)/* ||
				term.description.toLowerCase().includes(this.state.searchQuery)*/
			)
		);
	}

	getGroupedTerms(filteredTerms) {
		return filteredTerms.reduce((groups, term) => {
			const key = this.state.selectedCategory ? term.category : term.letter;
			if (!groups[key]) groups[key] = [];
			groups[key].push(term);
			return groups;
		}, {});
	}

	getSortedGroups(groupedTerms) {
		return Object.keys(groupedTerms).sort((a, b) => {
			if (!this.state.selectedCategory) return a.localeCompare(b);

			return this.getCategoryOrder(a) - this.getCategoryOrder(b) || a.localeCompare(b);
		});
	}

	renderNoResults() {
		const query = this.state.searchQuery.trim();
		const message = query
			? `No results for "${escapeHtml(query)}".`
			: 'No entries found for the current filters.';

		return `
			<div class="empty-state grid-col-full">
				<h2 class="text-heading-lg">${message}</h2>
			</div>
		`;
	}

	renderSeeAlso(term) {
		if (!term.seeAlso?.length) return '';

		const links = term.seeAlso
			.map(label => {
				const linkedTerm = this.getTermByName(label);
				const href = linkedTerm ? `#${linkedTerm.id}` : '#lexicon-entries';
				return `<a href="${href}">${escapeHtml(label)}</a>`;
			})
			.join(', ');

		return `<p class="text-body-sm">See also: ${links}</p>`;
	}

	renderPronunciation(term) {
		if (!term.pronunciation) return '';

		return `<p class="term-pronunciation text-body-sm">Pronounced: ${escapeHtml(term.pronunciation)}</p>`;
	}

	renderAliases(term) {
		if (!term.aliases?.length) return '';

		const labels = term.aliases.map(alias => {
			const pronunciation = term.aliasPronunciations?.[alias];
			return pronunciation
				? `${escapeHtml(alias)} (${escapeHtml(pronunciation)})`
				: escapeHtml(alias);
		});

		return `<p class="term-aliases text-body-sm">Also listed as: ${labels.join(', ')}</p>`;
	}

	render(scrollToTop = false) {
		const filteredTerms = this.getFilteredTerms();
		const groupedTerms = this.getGroupedTerms(filteredTerms);
		const sortedGroups = this.getSortedGroups(groupedTerms);

		this.el.results.innerHTML = filteredTerms.length
			? sortedGroups.map(group => this.renderGroup(group, groupedTerms[group])).join('')
			: this.renderNoResults();
		this.updateNav(this.state.selectedCategory ? [] : filteredTerms);

		if (scrollToTop) {
			this.scrollResultsToTop();
		}
	}

	renderGroup(group, terms) {
		const groupedItems = terms.sort((a, b) => a.name.localeCompare(b.name));
		const sectionId = this.state.selectedCategory ? this.getCategoryId(group) : group;
		const headingClass = this.state.selectedCategory
			? 'lexicon-section-title is-category text-heading-md grid-col-md-2'
			: 'lexicon-section-title text-display-md grid-col-md-2';

		return `
			<section class="lexicon-section grid grid-col-full" id="${sectionId}">
				<h2 class="${headingClass}">${escapeHtml(group)}</h2>
				<div class="term-group grid grid-col-md-8">
					${groupedItems.map(term => this.renderTerm(term)).join('')}
				</div>
			</section>
		`;
	}

	renderTerm(term) {
		return `
			<article class="term-item grid-col-full" id="${term.id}">
				<div class="term-heading">
					<p class="text-label">${escapeHtml(term.category)}</p>
					<h3>${escapeHtml(term.name)}</h3>
					${this.renderPronunciation(term)}
					${this.renderAliases(term)}
				</div>
				<p class="term-description">${escapeHtml(term.description)}</p>
				${this.renderSeeAlso(term)}
			</article>
		`;
	}
}
