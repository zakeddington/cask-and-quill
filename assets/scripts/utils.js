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
