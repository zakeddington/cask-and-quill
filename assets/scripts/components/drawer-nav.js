import { BaseDrawer } from './drawer.js';

export class NavDrawer extends BaseDrawer {
	constructor() {
		super(document.getElementById('nav-drawer'), document.getElementById('nav-drawer-overlay'), {
			triggerEl: document.getElementById('nav-menu-btn'),
		});
	}
}
