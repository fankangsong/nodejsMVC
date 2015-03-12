var route = require('./route');
var config = require('../config');
var controllerBase = require('./controllerBase')
var invalidHandler = require('./invalidHandler')

module.exports = function(req, res){

    var router = route.find(req.url, req.method);
    if(router.action){
        var controller = require('../controllers/' + router.controller);
        if(controller[router.action]){
            try{
                controller[router.action].call(new controllerBase(req, res), router.arguments);
            }
            catch(err){
                invalidHandler.handle500(req, res, err);
            }
        }
        else{
            invalidHandler.handle404(req, res);
        }
    }
    else{
        //console.log(router.controller);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('static');
    }

};