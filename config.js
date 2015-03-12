var route = require('./core/route');




route.map({
	rule: /^\/$/i,
	controller: 'index',
	action: 'index',
	arguments: 1
});

route.map({
	rule: /^\/index\/?\d*\/?/i,
	controller: 'index',
	action: 'index',
	arguments: 1
});

route.map({
	rule: /^\/(article)(\/)?[\w-_]*\/?/i,
	controller: 'article',
	action: 'article',
	arguments: ''
});

route.map({
	rule: /^\/about\/*$/i,
	controller: 'about',
	action: 'about',
	arguments: ''
});