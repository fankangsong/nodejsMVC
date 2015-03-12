var fs = require('fs');
var path = require('path');
var marked = require('marked');
var invalidHandler = require('../core/invalidHandler');
var config = require('../config');

var FILE_ENCODING = 'uft-8';

exports.article = function(args){
	var me = this;

	if(args[0] === ''){
		invalidHandler.handle404(this.req, this.res);
		return;
	}

	var postpath = path.join(config.ROOT, config.POST_DIR) + '/' + args[0] + '.md';
	
	fs.readFile(postpath, 'utf-8', function(err, file){
        if(err){
        	console.log(err);
            invalidHandler.handle404(me.req, me.res);
            return;
        }
        var ext = (ext = path.extname(postpath)) ? ext.slice(1) : 'text';
	    me.render('article.html', {
	    	post: marked(file)
	    });
    });
}