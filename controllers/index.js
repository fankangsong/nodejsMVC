var fs = require('fs');
var config = require('../config');

var cache = [];

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

var parseFiles = function(arr){
    var _arr = []
    for(var i in arr){
        _arr[i] = {
            title: arr[i].replace(config.POST_DIR + '/' , '').replace('.md', ''),
            link: arr[i].replace(config.POST_DIR + '/' , '').replace('.md', '')
        }
    }
    return _arr;
}


exports.index = function(args){
    if(args[0] === 'clear'){
        cache = []
    }
	var me = this;
	var list = [];

    console.log(cache.length);

    if(cache.length > 0){
        me.render('index.html', {
            list: parseFiles(cache),
            filename: config.VIEWS_DIR
        })
    }
    else{
        walk(config.POST_DIR, function(err, results){
            cache = results;
            results = results.sort();
            me.render('index.html', {
                list: parseFiles(results),
                filename: config.VIEWS_DIR
            })
        });
    }
	
}