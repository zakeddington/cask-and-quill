export class SubRegionMapSwitcher {
	constructor(groupEl) {
		this.config = {
			alphaThreshold: 16,
		};

		this.imageCache = new Map();

		const elMap = document.getElementById(groupEl.dataset.mapTarget);

		this.el = {
			group: groupEl,
			mapContainer: groupEl.closest('.sub-regions-map-container') || groupEl,
			map: elMap,
			mapBaseImage: elMap?.querySelector('.sub-regions-map-image-base'),
			allHighlightImage: elMap?.querySelector('.sub-regions-map-image-all-highlight'),
			overlays: elMap ? Array.from(elMap.querySelectorAll('.sub-regions-map-image-highlight')) : [],
			regionItems: Array.from(groupEl.querySelectorAll('.sub-regions-list-item[data-region-key][data-map-highlight-image]')),
		};

		this.state = {
			regions: new Map(),
			isSectionHovered: false,
			activeLayerIndex: 0,
			activeRegionKey: '',
			activeSource: '',
			overlayTransitionToken: 0,
			mapHoverToken: 0,
		};

		if (!this.el.map || !this.el.mapBaseImage || !this.el.allHighlightImage) return;

		this.initMap();
		this.registerRegionData();
		this.addEventListeners();
	}

	loadImage(src) {
		if (!this.imageCache.has(src)) {
			const image = new Image();
			const ready = new Promise(resolve => {
				image.addEventListener('load', resolve, { once: true });
				image.addEventListener('error', resolve, { once: true });
			});

			image.src = src;
			this.imageCache.set(src, { image, ready });
		}

		return this.imageCache.get(src);
	}

	createHitMap(image) {
		const width = image.naturalWidth || 0;
		const height = image.naturalHeight || 0;
		if (!width || !height) return null;

		const canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		const ctx = canvas.getContext('2d', { willReadFrequently: true });
		if (!ctx) return null;

		ctx.drawImage(image, 0, 0);
		const alpha = ctx.getImageData(0, 0, width, height).data;
		const alphaMap = new Uint8ClampedArray(width * height);
		for (let i = 0; i < alphaMap.length; i += 1) {
			alphaMap[i] = alpha[(i * 4) + 3];
		}

		return { width, height, alpha: alphaMap };
	}

	initMap() {
		const { baseSrc, initialHighlightSrc } = this.el.map.dataset;
		this.loadImage(baseSrc);
		this.loadImage(initialHighlightSrc);
		this.el.mapBaseImage.src = baseSrc;
		this.el.allHighlightImage.src = initialHighlightSrc;
		this.setAllHighlightVisible(true);
	}

	registerRegionData() {
		this.el.regionItems.forEach(regionElement => {
			const regionKey = regionElement.dataset.regionKey;
			const highlightSrc = regionElement.dataset.mapHighlightImage;
			const imageRecord = this.loadImage(highlightSrc);

			this.state.regions.set(regionKey, { element: regionElement, highlightSrc, hitMap: null });

			imageRecord.ready.then(() => {
				const region = this.state.regions.get(regionKey);
				if (!region) return;

				region.hitMap = this.createHitMap(imageRecord.image);
			});
		});
	}

	addEventListeners() {
		this.el.regionItems.forEach(regionElement => {
			const regionKey = regionElement.dataset.regionKey;

			regionElement.addEventListener('mouseenter', () => {
				this.setSectionHovered(true);
				this.showRegion(regionKey, 'text');
			});

			regionElement.addEventListener('focus', () => {
				this.setSectionHovered(true);
				this.showRegion(regionKey, 'text');
			});

			regionElement.addEventListener('mouseleave', event => this.onRegionMouseLeave(event));
		});

		this.el.mapContainer.addEventListener('mouseenter', () => this.setSectionHovered(true));
		this.el.mapContainer.addEventListener('mouseleave', () => this.setSectionHovered(false));

		this.el.map.addEventListener('mousemove', event => this.onMapMouseMove(event));
		this.el.map.addEventListener('mouseleave', () => this.onMapMouseLeave());

		this.el.group.addEventListener('focusout', event => this.onGroupFocusOut(event));
	}

	onRegionMouseLeave(event) {
		const nextRegion = event.relatedTarget?.closest?.('.sub-regions-list-item[data-region-key]');
		if (nextRegion) return;
		if (this.state.activeSource === 'text') this.clearActiveRegion();
	}

	onMapMouseMove(event) {
		if (!this.state.isSectionHovered) return;

		this.state.mapHoverToken += 1;
		const token = this.state.mapHoverToken;
		const regionKey = this.getPointRegionKey(event.clientX, event.clientY);
		if (token !== this.state.mapHoverToken) return;

		if (regionKey) {
			this.showRegion(regionKey, 'map');
			return;
		}

		if (this.state.activeSource === 'map') this.clearActiveRegion();
	}

	onMapMouseLeave() {
		if (this.state.activeSource === 'map') this.clearActiveRegion();
	}

	onGroupFocusOut(event) {
		const nextFocusTarget = event.relatedTarget;
		if (!this.el.mapContainer.contains(nextFocusTarget)) this.setSectionHovered(false);
	}

	setAllHighlightVisible(isVisible) {
		this.el.allHighlightImage.classList.toggle('is-visible', isVisible);
	}

	clearActiveRegion() {
		this.state.overlayTransitionToken += 1;
		this.state.activeRegionKey = '';
		this.state.activeSource = '';
		this.el.overlays.forEach(overlay => overlay.classList.remove('is-visible'));
		this.state.regions.forEach(region => region.element.classList.remove('is-active'));
	}

	setRegionOverlay(src) {
		if (!src) return;

		this.state.overlayTransitionToken += 1;
		const token = this.state.overlayTransitionToken;

		const nextLayerIndex = this.state.activeLayerIndex === 0 ? 1 : 0;
		const nextOverlay = this.el.overlays[nextLayerIndex];
		const currentOverlay = this.el.overlays[this.state.activeLayerIndex];
		if (!nextOverlay || !currentOverlay) return;

		this.loadImage(src).ready.then(() => {
			if (token !== this.state.overlayTransitionToken) return;

			requestAnimationFrame(() => {
				if (token !== this.state.overlayTransitionToken) return;

				nextOverlay.src = src;
				nextOverlay.classList.add('is-visible');
				currentOverlay.classList.remove('is-visible');
				this.state.activeLayerIndex = nextLayerIndex;
			});
		});
	}

	showRegion(regionKey, source) {
		const region = this.state.regions.get(regionKey);
		if (!region) return;
		if (this.state.activeRegionKey === regionKey && this.state.activeSource === source) return;

		this.state.activeRegionKey = regionKey;
		this.state.activeSource = source;
		this.setAllHighlightVisible(false);
		this.setRegionOverlay(region.highlightSrc);
		this.state.regions.forEach((entry, key) => {
			entry.element.classList.toggle('is-active', key === regionKey);
		});
	}

	setSectionHovered(hovered) {
		if (this.state.isSectionHovered === hovered) return;

		this.state.isSectionHovered = hovered;
		if (hovered) {
			this.setAllHighlightVisible(false);
			return;
		}

		this.clearActiveRegion();
		this.setAllHighlightVisible(true);
	}

	getPointRegionKey(clientX, clientY) {
		const rect = this.el.map.getBoundingClientRect();
		if (!rect.width || !rect.height) return '';

		const x = (clientX - rect.left) / rect.width;
		const y = (clientY - rect.top) / rect.height;
		if (x < 0 || x > 1 || y < 0 || y > 1) return '';

		let matchedKey = '';
		this.state.regions.forEach((region, key) => {
			const hitMap = region.hitMap;
			if (!hitMap || matchedKey) return;

			const px = Math.floor(x * hitMap.width);
			const py = Math.floor(y * hitMap.height);
			if (px < 0 || py < 0 || px >= hitMap.width || py >= hitMap.height) return;

			const alpha = hitMap.alpha[(py * hitMap.width) + px];
			if (alpha > this.config.alphaThreshold) matchedKey = key;
		});

		return matchedKey;
	}
}
