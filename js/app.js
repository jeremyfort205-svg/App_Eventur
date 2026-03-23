// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
	id: 'com.app',
	root: '#app',
	theme: 'md',
	view: {
		pushState: true
	},
	cache: false,
	cacheDuration: 0,
	modalTitle: 'Order',
	panel: {
		swipe: true,
	},
	routes: [
		{
			path: '/home/',
			url: 'index.html',
			name: 'home',
		}
		,
		{
			path: '/Nosotros/',
			url: 'Nosotros.html',
			name: 'Nosotros',
		}
		,
		{
			path: '/Servicios/',
			url: 'Servicios.html',
			name: 'Servicios',
		}
		,
		{
			path: '/Blog/',
			url: 'Blog.html',
			name: 'Blog',
		}
		,
		{
			path: '/Reseñas/',
			url: 'Reseñas.html',
			name: 'Reseñas',
		}
		,
		{
			path: '/Contacto/',
			url: 'Contacto.html',
			name: 'Contacto',
		}
		,
		{
			path: '/Términos & Condiciones/',
			url: 'Términos & Condiciones.html',
			name: 'Términos & Condiciones',
		}
		,
		{
			path: '/eventos/',
			url: 'eventos.html',
			name: 'eventos',
		}
		,
		{
			path: '/viajes/',
			url: 'viajes.html',
			name: 'viajes',
		}
		,
		{
			path: '/blog1/',
			url: 'blog1.html',
			name: 'blog1',
		}
		,
		{
			path: '/blog2/',
			url: 'blog2.html',
			name: 'blog2',
		}
		,
		{
			path: '/blog3/',
			url: 'blog3.html',
			name: 'blog3',
		}
		,
		{
			path: '/blog4/',
			url: 'blog4.html',
			name: 'blog4',
		}



	],
	popup: {
		closeOnEscape: true,
		backdrop: false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});
