var path = require('path');
var fs = require('fs');
var ejs = require('ejs');
var config = require('../config');

exports.handle404 = function(req, res) {

	var template = fs.readFileSync(path.join(config.ROOT, config.VIEWS_DIR, '/error.html'), 'utf-8');
	var output = ejs.render(template, {
		filename: config.VIEWS_DIR,
		title: 'Error 404',
		error: '404 !'
	});

	res.writeHead(404, {'Content-Type': 'text/html'});
	res.end(output);
};

exports.handle500 = function(req, res, err){
	var template = fs.readFileSync(path.join(config.ROOT, config.VIEWS_DIR, '/error.html'), 'utf-8');
	var output = ejs.render(template, {
		filename: config.VIEWS_DIR,
		title: 'Error 500',
		error: '500 ! ' + err
	});

	res.writeHead(500, {'Content-Type': 'text/html'});
	res.end(output);
};