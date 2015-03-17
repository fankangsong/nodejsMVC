
var path = require('path');
var fs = require('fs');
var ejs = require('ejs');

var invalidHandler = require('./invalidHandler')
var config = require('../config')

var ENCODING = 'utf-8';

function controllerBase(req, res){
	this.req = req;
	this.res = res;
}

controllerBase.prototype.render = function(viewName, context){
    var filepath = path.join(config.ROOT, config.VIEWS_DIR, viewName);
    try{
        var fileContent = fs.readFileSync(filepath, ENCODING)   
    }
    catch(err){
        invalidHandler.handle500(req, res, '模版文件没找到');
        return;
    }
    try{
        var output = ejs.render(fileContent, context);
    }catch(err){
        invalidHandler.handle500(req, res, err);
        return;
    }
    this.res.writeHead(200, {'Content-Type': 'text/html'});
    this.res.end(output);
}

controllerBase.prototype.renderJson = function(json){
    
    this.res.writeHead(200, {'Content-Type': 'application/javascript'});
    this.res.end(JSON.stringify(json));
}



module.exports = controllerBase;