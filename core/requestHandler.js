var route = require('./route');
var config = require('../config');
var controllerBase = require('./controllerBase');
var invalidHandler = require('./invalidHandler');
var staticFileHandler = require('./staticFileHandler')

module.exports = function(req, res){

    var router = route.find(req.url, req.method);
    if(router.action){
        try{
            var controller = require('../controllers/' + router.controller);    
        }
        catch(err){
            invalidHandler.handle500(req, res, err);
            return;
        }
        
        if(controller[router.action]){
            try{
                controller[router.action].call(new controllerBase(req, res), router.arguments);
            }
            catch(err){
                invalidHandler.handle500(req, res, err);
                return;
            }
        }
        else{
            invalidHandler.handle404(req, res);
        }
    }
    else{
        staticFileHandler.handle(req, res);
    }

};