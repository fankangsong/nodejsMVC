/*staticFileHandler*/

var parseURL = require('url').parse;
var path = require('path');
var fs = require('fs');

var config = require('../config');
var invalidHandler = require('./invalidHandler');

var FILE_ENCODING = 'binary';


exports.handle = function(req, res){
	var url = parseURL(req.url);
	var filepath = url.pathname == config.FAVICON ? path.join(config.ROOT, url.pathname) : path.join(config.ROOT, config.STATIC_FILE_DIR, url.pathname);
	
	fs.exists(filepath, function(exists){

		if(!exists){
			invalidHandler.handle404(req, res);
			return;
		}
	});

	fs.readFile(filepath, FILE_ENCODING, function(err, file){
		if(err){
			invalidHandler.handle404(req, res);
			return err;
		}
		var ext = (ext = path.extname(filepath)) ? ext.slice(1) : 'text';
		res.writeHead(200, {'Content-Type': config.CONTENT_TYPE[ext] || config.CONTENT_TYPE.html});
		res.write(file, FILE_ENCODING);
		res.end();
	});

	
}