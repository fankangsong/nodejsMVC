
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

var viewEngine = {
    render: function(req, res, viewName, context){
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
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(output);
    },
    renderJson: function(res, json){
    }
}

controllerBase.prototype.render = function(viewName, context){
    viewEngine.render(this.req, this.res, viewName, context);
}

controllerBase.prototype.renderJson = function(json){
    viewEngine.renderJson(this.req, this.res, json);
}



module.exports = controllerBase;