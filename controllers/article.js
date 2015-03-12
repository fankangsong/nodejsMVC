
var marked = require('marked');
var readPost = require('../core/staticFileHandler');
var invalidHandler = require('../core/invalidHandler');

exports.article = function(args){
	//var md = readPost(this.req, this.res);

	if(args[0] === ''){
		invalidHandler.handle404(this.req, this.res);
		return;
	}

	
	var md = readPost.handle(this.req, this.res, '/post/' + args[0] + '.md');

	console.log(md);


	return;

	this.render('article.html', {
		post: args
	})

	//console.log(md);
}