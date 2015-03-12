

var fs = require('fs');
var invalidHandler = require('./invalidHandler');
var config = require('../config');

var FILE_ENCODING = 'binary';

exports.find = function(filepath){
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
        return file;
    });
}