const SPRITE_URL = '/assets/images/icon-sprite.svg';

export class CustomDropdown {
	constructor(selectEl) {
		this._select = selectEl;
		this._options = this._readOptions();
		this._value = selectEl.value || (this._options[0]?.value ?? '');
		this._isOpen = false;
		this._outsideHandler = null;
		this._build();
		this._bindEvents();
	}

	get value() { return this._value; }

	setValue(v) {
		if (this._value === v) return;
		this._value = v;
		this._select.value = v;
		this._updateDisplay();
		this._syncSelected();
	}

	setOptions(options) {
		const prev = this._value;
		this._options = options;
		const stillExists = options.some(o => o.value === prev);
		this._value = stillExists ? prev : (options[0]?.value ?? '');
		this._select.innerHTML = options.map(o =>
			`<option value="${this._esc(o.value)}">${this._esc(o.label)}</option>`
		).join('');
		this._select.value = this._value;
		this._rebuildList();
		this._updateDisplay();
	}

	_readOptions() {
		return Array.from(this._select.options).map(o => ({
			value: o.value,
			label: o.textContent.trim()
		}));
	}

	_esc(str) {
		return String(str)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	}

	_getCurrentLabel() {
		return this._options.find(o => o.value === this._value)?.label
			?? this._options[0]?.label
			?? '';
	}

	_build() {
		const ariaLabel = this._select.getAttribute('aria-label') ?? '';

		this._wrapper = document.createElement('div');
		this._wrapper.className = 'custom-dropdown';

		this._trigger = document.createElement('button');
		this._trigger.type = 'button';
		this._trigger.className = 'custom-dropdown-trigger';
		this._trigger.setAttribute('aria-haspopup', 'listbox');
		this._trigger.setAttribute('aria-expanded', 'false');
		if (ariaLabel) this._trigger.setAttribute('aria-label', ariaLabel);

		this._valueEl = document.createElement('span');
		this._valueEl.className = 'custom-dropdown-label';
		this._valueEl.textContent = this._getCurrentLabel();

		const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		icon.setAttribute('class', 'svg-icon custom-dropdown-icon');
		icon.setAttribute('aria-hidden', 'true');
		icon.setAttribute('focusable', 'false');
		const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
		use.setAttribute('href', `${SPRITE_URL}#icon-caret-down`);
		icon.appendChild(use);

		this._trigger.appendChild(this._valueEl);
		this._trigger.appendChild(icon);

		this._list = document.createElement('ul');
		this._list.className = 'custom-dropdown-list';
		this._list.setAttribute('role', 'listbox');
		if (ariaLabel) this._list.setAttribute('aria-label', ariaLabel);
		this._list.hidden = true;

		this._rebuildList();

		this._wrapper.appendChild(this._trigger);
		this._wrapper.appendChild(this._list);

		this._select.parentNode.insertBefore(this._wrapper, this._select);
		this._select.hidden = true;
	}

	_rebuildList() {
		this._list.innerHTML = '';
		this._options.forEach(o => {
			const li = document.createElement('li');
			const selected = o.value === this._value;
			li.className = 'custom-dropdown-option' + (selected ? ' is-selected' : '');
			li.setAttribute('role', 'option');
			li.setAttribute('aria-selected', String(selected));
			li.dataset.value = o.value;
			li.tabIndex = -1;
			li.textContent = o.label;
			this._list.appendChild(li);
		});
	}

	_updateDisplay() {
		this._valueEl.textContent = this._getCurrentLabel();
	}

	_syncSelected() {
		this._list.querySelectorAll('.custom-dropdown-option').forEach(el => {
			const selected = el.dataset.value === this._value;
			el.classList.toggle('is-selected', selected);
			el.setAttribute('aria-selected', String(selected));
		});
	}

	_open() {
		this._isOpen = true;
		this._wrapper.classList.add('is-open');
		this._trigger.setAttribute('aria-expanded', 'true');
		this._list.hidden = false;

		const focused = this._list.querySelector('.is-selected') ?? this._list.querySelector('.custom-dropdown-option');
		focused?.focus();

		this._outsideHandler = e => {
			if (!this._wrapper.contains(e.target)) this._close();
		};
		document.addEventListener('pointerdown', this._outsideHandler);
	}

	_close() {
		if (!this._isOpen) return;
		this._isOpen = false;
		this._wrapper.classList.remove('is-open');
		this._trigger.setAttribute('aria-expanded', 'false');
		this._list.hidden = true;
		document.removeEventListener('pointerdown', this._outsideHandler);
	}

	_selectOption(value) {
		const prev = this._value;
		this._value = value;
		this._select.value = value;
		this._updateDisplay();
		this._syncSelected();
		this._close();
		this._trigger.focus();

		if (prev !== value) {
			this._select.dispatchEvent(new Event('change', { bubbles: true }));
		}
	}

	_bindEvents() {
		this._trigger.addEventListener('click', e => {
			e.stopPropagation();
			this._isOpen ? this._close() : this._open();
		});

		this._trigger.addEventListener('keydown', e => {
			if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				if (!this._isOpen) this._open();
			}
		});

		this._list.addEventListener('keydown', e => {
			const options = Array.from(this._list.querySelectorAll('.custom-dropdown-option'));
			const focused = this._list.querySelector(':focus');
			const idx = options.indexOf(focused);

			switch (e.key) {
				case 'ArrowDown':
					e.preventDefault();
					options[(idx + 1) % options.length]?.focus();
					break;
				case 'ArrowUp':
					e.preventDefault();
					options[(idx - 1 + options.length) % options.length]?.focus();
					break;
				case 'Home':
					e.preventDefault();
					options[0]?.focus();
					break;
				case 'End':
					e.preventDefault();
					options[options.length - 1]?.focus();
					break;
				case 'Enter':
				case ' ':
					e.preventDefault();
					if (focused?.matches('.custom-dropdown-option')) {
						this._selectOption(focused.dataset.value);
					}
					break;
				case 'Escape':
				case 'Tab':
					this._close();
					break;
			}
		});

		this._list.addEventListener('click', e => {
			const option = e.target.closest('.custom-dropdown-option');
			if (option) this._selectOption(option.dataset.value);
		});
	}
}
