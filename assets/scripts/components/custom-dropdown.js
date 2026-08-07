import { html } from '../utils.js';
import {
	SPRITE_URL,
	KEY_ESCAPE,
	KEY_TAB,
	KEY_ENTER,
	KEY_SPACE,
	KEY_ARROW_DOWN,
	KEY_ARROW_UP,
	KEY_HOME,
	KEY_END
} from '../config/constants.js';

export class CustomDropdown {
	constructor(selectEl) {
		this.el = {
			select: selectEl,
		};

		this.state = {
			options: this.readOptions(),
			value: '',
			isOpen: false,
		};
		this.state.value = selectEl.value || (this.state.options[0]?.value ?? '');

		this.onOutsideClick = this.onOutsideClick.bind(this);

		this.build();
		this.addEventListeners();
	}

	setOptions(options) {
		const prev = this.state.value;
		this.state.options = options;
		const stillExists = options.some(o => o.value === prev);
		this.state.value = stillExists ? prev : (options[0]?.value ?? '');
		this.el.select.innerHTML = options.map(o =>
			`<option value="${html(o.value)}">${html(o.label)}</option>`
		).join('');
		this.el.select.value = this.state.value;
		this.renderList();
		this.updateDisplay();
	}

	readOptions() {
		return Array.from(this.el.select.options).map(o => ({
			value: o.value,
			label: o.textContent.trim()
		}));
	}

	getCurrentLabel() {
		return this.state.options.find(o => o.value === this.state.value)?.label
			?? this.state.options[0]?.label
			?? '';
	}

	build() {
		const ariaLabel = this.el.select.getAttribute('aria-label') ?? '';

		this.el.wrapper = document.createElement('div');
		this.el.wrapper.className = 'custom-dropdown';

		this.el.trigger = document.createElement('button');
		this.el.trigger.type = 'button';
		this.el.trigger.className = 'custom-dropdown-trigger';
		this.el.trigger.setAttribute('aria-haspopup', 'listbox');
		this.el.trigger.setAttribute('aria-expanded', 'false');
		if (ariaLabel) this.el.trigger.setAttribute('aria-label', ariaLabel);

		this.el.valueLabel = document.createElement('span');
		this.el.valueLabel.className = 'custom-dropdown-label';
		this.el.valueLabel.textContent = this.getCurrentLabel();

		const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		icon.setAttribute('class', 'svg-icon custom-dropdown-icon');
		icon.setAttribute('aria-hidden', 'true');
		icon.setAttribute('focusable', 'false');
		const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
		use.setAttribute('href', `${SPRITE_URL}#icon-caret-down`);
		icon.appendChild(use);

		this.el.trigger.appendChild(this.el.valueLabel);
		this.el.trigger.appendChild(icon);

		this.el.list = document.createElement('ul');
		this.el.list.className = 'custom-dropdown-list';
		this.el.list.setAttribute('role', 'listbox');
		if (ariaLabel) this.el.list.setAttribute('aria-label', ariaLabel);
		this.el.list.hidden = true;

		this.renderList();

		this.el.wrapper.appendChild(this.el.trigger);
		this.el.wrapper.appendChild(this.el.list);

		this.el.select.parentNode.insertBefore(this.el.wrapper, this.el.select);
		this.el.select.hidden = true;
	}

	renderList() {
		this.el.list.innerHTML = '';
		this.state.options.forEach(o => {
			const li = document.createElement('li');
			const selected = o.value === this.state.value;
			li.className = 'custom-dropdown-option' + (selected ? ' is-selected' : '');
			li.setAttribute('role', 'option');
			li.setAttribute('aria-selected', String(selected));
			li.dataset.value = o.value;
			li.tabIndex = -1;
			li.textContent = o.label;
			this.el.list.appendChild(li);
		});
	}

	updateDisplay() {
		this.el.valueLabel.textContent = this.getCurrentLabel();
	}

	syncSelected() {
		this.el.list.querySelectorAll('.custom-dropdown-option').forEach(option => {
			const selected = option.dataset.value === this.state.value;
			option.classList.toggle('is-selected', selected);
			option.setAttribute('aria-selected', String(selected));
		});
	}

	open() {
		this.state.isOpen = true;
		this.el.wrapper.classList.add('is-open');
		this.el.trigger.setAttribute('aria-expanded', 'true');
		this.el.list.hidden = false;

		const focused = this.el.list.querySelector('.is-selected') ?? this.el.list.querySelector('.custom-dropdown-option');
		focused?.focus();

		document.addEventListener('pointerdown', this.onOutsideClick);
	}

	close() {
		if (!this.state.isOpen) return;
		this.state.isOpen = false;
		this.el.wrapper.classList.remove('is-open');
		this.el.trigger.setAttribute('aria-expanded', 'false');
		this.el.list.hidden = true;
		document.removeEventListener('pointerdown', this.onOutsideClick);
	}

	syncValue(value) {
		if (this.state.value === value) return;
		this.state.value = value;
		this.el.select.value = value;
		this.updateDisplay();
		this.syncSelected();
	}

	selectOption(value) {
		const prev = this.state.value;
		this.state.value = value;
		this.el.select.value = value;
		this.updateDisplay();
		this.syncSelected();
		this.close();
		this.el.trigger.focus();

		if (prev !== value) {
			this.el.select.dispatchEvent(new Event('change', { bubbles: true }));
		}
	}

	addEventListeners() {
		this.el.trigger.addEventListener('click', event => this.onTriggerClick(event));
		this.el.trigger.addEventListener('keydown', event => this.onTriggerKeydown(event));
		this.el.list.addEventListener('keydown', event => this.onListKeydown(event));
		this.el.list.addEventListener('click', event => this.onListClick(event));
	}

	onOutsideClick(event) {
		if (!this.el.wrapper.contains(event.target)) this.close();
	}

	onTriggerClick(event) {
		event.stopPropagation();
		this.state.isOpen ? this.close() : this.open();
	}

	onTriggerKeydown(event) {
		if (event.key === KEY_ARROW_DOWN || event.key === KEY_ARROW_UP || event.key === KEY_ENTER || event.key === KEY_SPACE) {
			event.preventDefault();
			if (!this.state.isOpen) this.open();
		}
	}

	onListKeydown(event) {
		const options = Array.from(this.el.list.querySelectorAll('.custom-dropdown-option'));
		const focused = this.el.list.querySelector(':focus');
		const idx = options.indexOf(focused);

		switch (event.key) {
			case KEY_ARROW_DOWN:
				event.preventDefault();
				options[(idx + 1) % options.length]?.focus();
				break;
			case KEY_ARROW_UP:
				event.preventDefault();
				options[(idx - 1 + options.length) % options.length]?.focus();
				break;
			case KEY_HOME:
				event.preventDefault();
				options[0]?.focus();
				break;
			case KEY_END:
				event.preventDefault();
				options[options.length - 1]?.focus();
				break;
			case KEY_ENTER:
			case KEY_SPACE:
				event.preventDefault();
				if (focused?.matches('.custom-dropdown-option')) {
					this.selectOption(focused.dataset.value);
				}
				break;
			case KEY_ESCAPE:
			case KEY_TAB:
				this.close();
				break;
		}
	}

	onListClick(event) {
		const option = event.target.closest('.custom-dropdown-option');
		if (option) this.selectOption(option.dataset.value);
	}
}
