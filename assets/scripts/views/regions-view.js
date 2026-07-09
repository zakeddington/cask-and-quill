import { REGIONS_DATA } from '../data/regions-data.js';
import { escapeHtml } from '../utils.js';
import { SubRegionMapSwitcher } from '../components/sub-region-map-switcher.js';
import { SPRITE_URL, KEY_ARROW_DOWN, KEY_ARROW_UP, KEY_HOME, KEY_END } from '../config/constants.js';

export class RegionsView {
	constructor(elContainer) {

		this.data = REGIONS_DATA;

		this.el = {
			container: elContainer,
		}

		this.init();
	}

	init() {
		this.render();
		this.initAccordions();
		new SubRegionMapSwitcher().init(this.el.container);
	}

	initAccordions() {
		const elTriggers = this.el.container.querySelectorAll('.region-accordion-trigger');
		elTriggers.forEach(elTrigger => {
			elTrigger.addEventListener('click', () => this.toggleAccordion(elTrigger));
			elTrigger.addEventListener('keydown', event => this.onAccordionKeydown(event, elTriggers));
		});
	}

	toggleAccordion(elTrigger) {
		const elSection = elTrigger.closest('.region-section');
		const elPanel = document.getElementById(elTrigger.getAttribute('aria-controls'));
		const isExpanded = elTrigger.getAttribute('aria-expanded') === 'true';

		elTrigger.setAttribute('aria-expanded', String(!isExpanded));
		elPanel.setAttribute('aria-hidden', String(isExpanded));
		elSection.classList.toggle('is-open', !isExpanded);

		if (!isExpanded) {
			setTimeout(() => {
				elSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}, 350);
		}
	}

	onAccordionKeydown(event, elTriggers) {
		const currentIndex = Array.from(elTriggers).indexOf(event.currentTarget);
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

	render() {
		this.el.container.innerHTML = this.data.map(region => this.renderRegion(region)).join('');
	}

	renderRegion(region) {
		const isOpen = false;
		const triggerId = `region-trigger-${region.id}`;
		const panelId = `region-panel-${region.id}`;

		return `
			<section class="region-section${isOpen ? ' is-open' : ''}">
				<header class="region-header">
					<h2 class="region-title">
						<button
							aria-controls="${panelId}"
							aria-expanded="${isOpen}"
							class="region-accordion-trigger"
							id="${triggerId}"
							type="button"
						>
							<span class="region-title-content">
								<span class="region-title-text">${escapeHtml(region.name)}</span>
								${this.renderKeyRegulationsSummary(region.keyRegulationsSummary)}
							</span>
							<span class="region-accordion-icon" aria-hidden="true">
								<svg class="svg-icon" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#icon-caret-down"></use></svg>
							</span>
						</button>
					</h2>
				</header>

				<div
					aria-hidden="${!isOpen}"
					aria-labelledby="${triggerId}"
					class="region-panel"
					id="${panelId}"
					role="region"
				>
					<div class="region-panel-inner grid grid-align-stretch grid-col-full">
						<aside class="region-sidebar grid-col-md-3">
							${this.renderLegalFramework(region)}
							<img alt="${escapeHtml(region.name)} Bottle" class="region-bottle" src="${region.bottleImage}" />
						</aside>

						<div class="region-main grid-col-md-9">
							${this.renderVarieties(region)}
							${region.subRegions ? this.renderSubRegions(region) : ''}
						</div>
					</div>
				</div>
			</section>
		`;
	}

	renderKeyRegulationsSummary(summary) {
		const summaryItems = Array.isArray(summary) ? summary : [summary].filter(Boolean);
		if (summaryItems.length === 0) return '';

		return `
			<ul class="region-title-description text-body-md">
				${summaryItems.map(item => `<li class="region-title-description-item">${escapeHtml(item)}</li>`).join('')}
			</ul>
		`;
	}

	renderLegalFramework(region) {
		return `
			<div class="region-sidebar-block theme-accent">
				<h3 class="sidebar-title text-label">
					<svg class="svg-icon sidebar-title-icon" aria-hidden="true" focusable="false"><use href="/assets/images/icon-sprite.svg#icon-gavel"></use></svg>
					LEGAL FRAMEWORK
				</h3>
				<ul class="sidebar-list text-body-sm">
					${region.legalFramework.map(rule => `
						<li><strong>${escapeHtml(rule.label)}:</strong> ${escapeHtml(rule.value)}</li>
					`).join('')}
				</ul>
				<p class="text-body-sm"><strong>${escapeHtml(region.regulator)}</strong></p>
			</div>
		`;
	}

	renderVarieties(region) {
		return `
			<div class="region-varieties">
				<h3 class="varieties-title text-heading-md font-sans-serif tracking-wide uppercase line-height-normal">${escapeHtml(region.name)} Varieties</h3>
				<div class="varieties-list">
					${region.varieties.map(variety => this.renderVariety(variety)).join('')}
				</div>
			</div>
		`;
	}

	renderVariety(variety) {
		return `
			<div class="variety-item grid">
				<div class="variety-info grid-col-md-4">
					<h4 class="variety-name">${escapeHtml(variety.name)}</h4>
				</div>
				<div class="variety-description grid-col-md-8">
					<p>${escapeHtml(variety.description)}</p>
					<div class="variety-tags">
						${variety.tags.map(tag => `<span class="tag text-label">${escapeHtml(tag)}</span>`).join('')}
					</div>
				</div>
			</div>
		`;
	}

	renderSubRegions(region) {
		const mapId = `${region.id}-regions-map`;
		const defaultMapAlt = `${region.name} Regions Map`;
		const baseMapSrc = region.mapBaseImage;
		const initialHighlightSrc = region.mapAllHighlightImage;

		return `
			<div class="region-map">
				<h3 class="varieties-title text-heading-md font-sans-serif tracking-wide uppercase line-height-normal">${escapeHtml(region.name)} Regions</h3>
				<div class="map-container grid grid-align-center">
					<div
						class="map-image grid-col-md-12 grid-col-lg-6"
						data-base-src="${escapeHtml(baseMapSrc)}"
						data-initial-highlight-src="${escapeHtml(initialHighlightSrc)}"
						id="${escapeHtml(mapId)}"
					>
						<img
							alt="${escapeHtml(defaultMapAlt)}"
							class="map-base-image"
							src="${escapeHtml(baseMapSrc)}"
						/>
						<img alt="" aria-hidden="true" class="map-all-highlight-image is-visible" src="${escapeHtml(initialHighlightSrc)}" />
						<img alt="" aria-hidden="true" class="map-region-image" />
						<img alt="" aria-hidden="true" class="map-region-image" />
					</div>
					<div class="sub-regions grid grid-col-md-12 grid-col-lg-6" data-map-target="${escapeHtml(mapId)}">
						${region.subRegions.map(sub => {
							return `
								<div
									class="sub-region grid-col-full"
									data-region-key="${escapeHtml(sub.key)}"
									data-map-highlight-image="${escapeHtml(sub.mapHighlightImage)}"
									tabindex="0"
								>
									<h5>${escapeHtml(sub.name)}</h5>
									<p class="text-body-sm">${escapeHtml(sub.description)}</p>
								</div>
							`;
						}).join('')}
					</div>
				</div>
			</div>
		`;
	}
}
