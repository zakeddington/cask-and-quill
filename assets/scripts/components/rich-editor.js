import { init as pellInit } from '../vendor/pell.js';

export function initRichEditor({ element, value = '', onChange = () => {} }) {
	let editor;
	let source = null;
	let showingSource = false;

	const toggleSource = () => {
		if (!source) {
			source = document.createElement('textarea');
			source.className = 'pell-source';
			editor.content.insertAdjacentElement('afterend', source);
		}

		showingSource = !showingSource;

		if (showingSource) {
			source.value = editor.content.innerHTML;
			editor.content.hidden = true;
			source.hidden = false;
			source.focus();
		} else {
			editor.content.innerHTML = source.value;
			onChange(editor.content.innerHTML);
			source.hidden = true;
			editor.content.hidden = false;
		}

		return !showingSource;
	};

	editor = pellInit({
		element,
		onChange,
		actions: [
			'bold', 'italic', 'underline', 'olist', 'ulist',
			{
				name: 'html',
				icon: '&lt;&gt;',
				title: 'View Source',
				state: () => showingSource,
				result: () => toggleSource()
			}
		],
		defaultParagraphSeparator: 'p',
	});

	editor.content.addEventListener('paste', event => {
		event.preventDefault();
		const text = event.clipboardData.getData('text/plain');
		document.execCommand('insertText', false, text);
	});

	editor.content.addEventListener('input', () => {
		let changed = false;
		editor.content.querySelectorAll('[style]').forEach(el => {
			el.removeAttribute('style');
			changed = true;
		});
		editor.content.querySelectorAll('span').forEach(span => {
			if (!span.attributes.length) {
				span.replaceWith(...span.childNodes);
				changed = true;
			}
		});
		if (changed) onChange(editor.content.innerHTML);
	});

	editor.content.innerHTML = value;
	return editor;
}
