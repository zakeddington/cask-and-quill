async function initApp() {
	const { NavDrawer } = await import('./components/nav-drawer.js');
	new NavDrawer().init();

	let isAdmin = false;

	if (document.getElementById('catalog-auth-root')) {
		const { CatalogAuth } = await import('./components/catalog-auth.js');
		const authRoot = document.getElementById('catalog-auth-root');
		const auth = new CatalogAuth(authRoot, {
			onAuthChange: (adminStatus) => {
				isAdmin = adminStatus;
				window.dispatchEvent(new CustomEvent('auth-change', { detail: { isAdmin: adminStatus } }));
			}
		});
		isAdmin = await auth.init();
	}

	if (document.getElementById('lexicon-entries')) {
		const { Lexicon } = await import('./components/lexicon.js');

		new Lexicon().init();
	}

	if (document.getElementById('regions-list')) {
		const { Regions } = await import('./components/regions.js');

		new Regions().init();
	}

	if (document.getElementById('catalog-list')) {
		const { Catalog } = await import('./components/catalog.js');

		new Catalog(isAdmin).init();
	}

	if (document.getElementById('journal-drawer')) {
		const { JournalDrawer } = await import('./components/journal-drawer.js');

		new JournalDrawer(
			document.getElementById('journal-drawer'),
			document.getElementById('journal-drawer-overlay'),
			isAdmin
		);
	}
}

document.addEventListener('DOMContentLoaded', initApp);
