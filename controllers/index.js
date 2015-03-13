var fs = require('fs');
var config = require('../config');

var walk = function(dir, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {
        if (err) return done(err);
        var pending = list.length;
        if (!pending) return done(null, results);
        list.forEach(function(file) {
            file = dir + '/' + file;
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                    results = results.concat(res);
                if (!--pending) done(null, results);
                    });
                } else {
                    if(/\/about\./.test(file) || /\/links\./.test(file)){

                    }
                    else{
                        results.push(file);
                    }
                    
                if (!--pending) done(null, results);
                }
            });
        });
    });
};


exports.index = function(args){
	var me = this;
	var list = [];
	walk(config.POST_DIR, function(err, results){
		results = results.sort();
		for(var i in results){
			list[i] = {
				title: results[i].replace(config.POST_DIR + '/', '').replace('.md', ''),
				link: results[i].replace(config.POST_DIR + '/', '').replace('.md', '')
			}
		}

		me.render('index.html', {
			list: list,
			filename: config.VIEWS_DIR
		})
	});
}