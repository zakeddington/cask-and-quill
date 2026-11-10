// Keeps a view's filter/sort state in the URL query string so it survives refreshes and
// back/forward. `paramMap` maps state keys to query param names: { searchQuery: 'q' }.
//
// Search writes are debounced (browsers throttle history calls, and Safari throws past ~100 per
// 30 seconds) and a run of typing shares one history entry. Any other write pushes a new entry
// immediately, unless `replace` is set for changes the user didn't navigate to.
export class UrlState {
	constructor(paramMap, { onPop = null, searchDelay = 250 } = {}) {
		this.paramMap = paramMap;
		this.searchDelay = searchDelay;
		this.isSearchEntry = false;
		this.timer = null;

		window.addEventListener('popstate', () => {
			window.clearTimeout(this.timer);
			this.isSearchEntry = false;
			onPop?.();
		});
	}

	// Returns { stateKey: value } from the current URL, with missing params as ''.
	read() {
		const params = new URLSearchParams(window.location.search);
		return Object.fromEntries(
			Object.entries(this.paramMap).map(([key, param]) => [key, params.get(param)?.trim() ?? ''])
		);
	}

	// `values` is { stateKey: value }; empty values are dropped from the URL. `hash` defaults to
	// the current hash at the time of writing; pass '' to drop it.
	write(values, { fromSearch = false, replace = false, hash } = {}) {
		window.clearTimeout(this.timer);

		if (fromSearch && this.searchDelay > 0) {
			this.timer = window.setTimeout(() => this.commit(values, { fromSearch, hash }), this.searchDelay);
		} else {
			this.commit(values, { fromSearch, replace, hash });
		}
	}

	// Call after the view pushes its own history entry (e.g. hash navigation) so the next search
	// keystroke starts a new entry instead of replacing that one.
	resetSearchEntry() {
		this.isSearchEntry = false;
	}

	commit(values, { fromSearch = false, replace = false, hash = window.location.hash } = {}) {
		const params = new URLSearchParams(window.location.search);

		Object.entries(this.paramMap).forEach(([key, param]) => {
			const value = String(values[key] ?? '').trim();
			if (value) params.set(param, value);
			else params.delete(param);
		});

		const query = params.toString();
		const url = `${window.location.pathname}${query ? `?${query}` : ''}${hash}`;
		if (url === `${window.location.pathname}${window.location.search}${window.location.hash}`) return;

		if (replace || (fromSearch && this.isSearchEntry)) {
			window.history.replaceState(null, '', url);
		} else {
			window.history.pushState(null, '', url);
		}
		if (!replace) this.isSearchEntry = fromSearch;
	}
}
