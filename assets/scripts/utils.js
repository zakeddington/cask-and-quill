export function escapeHtml(value) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}

export function html(value) {
	return escapeHtml(String(value ?? ''));
}

export function stripHtml(value) {
	return String(value ?? '').replace(/<[^>]*>/g, '');
}

export function createEl(htmlString) {
	const div = document.createElement('div');
	div.innerHTML = htmlString.trim();
	return div.firstElementChild;
}

export function getFormValue(formData, key) {
	return String(formData.get(key) ?? '').trim();
}

export function normalizeTermName(value) {
	return value
		.toLowerCase()
		.replace(/&/g, 'and')
		.replace(/[^a-z0-9]+/g, ' ')
		.trim()
		.replace(/\s+/g, ' ');
}

// Reads the query params named in `paramMap` ({ stateKey: 'param' }) into { stateKey: value }.
export function readUrlParams(paramMap) {
	const params = new URLSearchParams(window.location.search);
	return Object.fromEntries(
		Object.entries(paramMap).map(([key, param]) => [key, params.get(param)?.trim() ?? ''])
	);
}

// Writes `values` ({ stateKey: value }) to the query params named in `paramMap`, leaving other
// params alone and dropping empty values. Returns false (and adds no history entry) if the URL
// wouldn't change.
export function writeUrlParams(paramMap, values, { replace = false, hash = window.location.hash } = {}) {
	const params = new URLSearchParams(window.location.search);

	Object.entries(paramMap).forEach(([key, param]) => {
		const value = String(values[key] ?? '').trim();
		if (value) params.set(param, value);
		else params.delete(param);
	});

	const query = params.toString();
	const url = `${window.location.pathname}${query ? `?${query}` : ''}${hash}`;
	if (url === `${window.location.pathname}${window.location.search}${window.location.hash}`) return false;

	if (replace) window.history.replaceState(null, '', url);
	else window.history.pushState(null, '', url);
	return true;
}
