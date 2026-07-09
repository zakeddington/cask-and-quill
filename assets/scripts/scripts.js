async function initApp() {
	const { NavDrawer } = await import('./components/drawer-nav.js');
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

	const elLexiconView = document.getElementById('lexicon-view');
	if (elLexiconView) {
		const { LexiconView } = await import('./views/lexicon-view.js');
		new LexiconView(elLexiconView);
	}

	const elRegionsList = document.getElementById('regions-list');
	if (elRegionsList) {
		const { RegionsView } = await import('./views/regions-view.js');
		new RegionsView(elRegionsList);
	}

	if (document.getElementById('catalog-list')) {
		const { CatalogView } = await import('./views/catalog-view.js');

		new CatalogView(isAdmin).init();
	}

	if (document.getElementById('flavors-list')) {
		const { FlavorsView } = await import('./views/flavors-view.js');
		new FlavorsView(document.getElementById('flavors-list'), isAdmin).init();
	}

	if (document.getElementById('journal-drawer')) {
		const { JournalDrawer } = await import('./components/drawer-journal.js');

		new JournalDrawer(
			document.getElementById('journal-drawer'),
			document.getElementById('journal-drawer-overlay'),
			isAdmin
		);
	}
}

document.addEventListener('DOMContentLoaded', initApp);
