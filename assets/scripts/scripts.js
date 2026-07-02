async function initApp() {
	const { NavDrawer } = await import('./components/nav-drawer.js');
	new NavDrawer().init();

	let isAdmin = false;

	if (document.getElementById('auth-root')) {
		const { Auth } = await import('./components/auth.js');
		const authRoot = document.getElementById('auth-root');
		const auth = new Auth(authRoot, {
			onAuthChange: (adminStatus) => {
				isAdmin = adminStatus;
				window.dispatchEvent(new CustomEvent('auth-change', { detail: { isAdmin: adminStatus } }));
			}
		});
		isAdmin = await auth.init();
	}

	if (document.getElementById('lexicon-entries')) {
		const { Lexicon } = await import('./views/lexicon.js');

		new Lexicon().init();
	}

	if (document.getElementById('regions-list')) {
		const { Regions } = await import('./views/regions.js');

		new Regions().init();
	}

	if (document.getElementById('catalog-list')) {
		const { Catalog } = await import('./views/catalog.js');

		new Catalog(isAdmin).init();
	}

	if (document.getElementById('flavors-list')) {
		const { Flavors } = await import('./views/flavors.js');
		new Flavors(document.getElementById('flavors-list'), isAdmin).init();
	}

	if (document.getElementById('journal-drawer')) {
		const { JournalDrawer } = await import('./views/journal-drawer.js');

		new JournalDrawer(
			document.getElementById('journal-drawer'),
			document.getElementById('journal-drawer-overlay'),
			isAdmin
		);
	}
}

document.addEventListener('DOMContentLoaded', initApp);
