var route = require('./core/route');


exports.CONTENT_TYPE = {
    css: 'text/css',
    gif: 'image/gif',
    html: 'text/html; charset=UTF-8',
    jpe: 'image/jpeg',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    js: 'application/x-javascript',
    png: 'image/png',
    text: 'text/plain; charset=UTF-8',
    md: 'text/plain; charset=UTF-8'
};

exports.ROOT = __dirname;

exports.STATIC_FILE_DIR = 'statics';

exports.VIEWS_DIR = 'views';

exports.FAVICON = '/favicon.png';

exports.POST_DIR = 'post';

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
