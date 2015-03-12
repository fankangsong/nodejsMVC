/*staticFileHandler*/

var parseURL = require('url').parse;
var path = require('path');


var config = require('../config');
var invalidHandler = require('./invalidHandler');
var fileFinder = require('./fileFinder');

var FILE_ENCODING = 'binary';


exports.handle = function(req, res){
    var url = parseURL(req.url);
    var filepath = url.pathname == config.FAVICON ? path.join(config.ROOT, url.pathname) : path.join(config.ROOT, config.STATIC_FILE_DIR, url.pathname);
    

    var file = fileFinder.find(filepath);
    console.log(typeof(file));
    var ext = (ext = path.extname(filepath)) ? ext.slice(1) : 'text';
    res.writeHead(200, {'Content-Type': config.CONTENT_TYPE[ext] || config.CONTENT_TYPE.html});
    //res.write(file, FILE_ENCODING);
    res.end();
}