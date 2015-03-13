
var routes = {
    get: [],
    post: []
}

/**
* 注册route规则
* 示例：
* route.map({
*     method:'post',
*     url: /\/blog\/post\/(\d+)\/?$/i,
*     controller: 'blog',
*     action: 'showBlogPost'
* })
*/
exports.map = function(map){
    if(map && map.rule && map.controller){
        var method = (map.method ? map.method : 'get').toLowerCase();
        routes[method].push({
            rule: map.rule,
            controller: map.controller,
            action: map.action,
            arguments: map.arguments
        });
    }
};

exports.find = function(url, method){
    url = url.toLowerCase();
    method = method.toLowerCase();
    var route = {controller: null, action: null, arguments: null};
    var r = routes[method];

    for(var i in r){
        if(r[i].rule.test(url)){
            route.controller = r[i].controller;
            route.action = r[i].action;
            route.arguments = url.replace( (new RegExp('^\/' + r[i].controller + '\/?')), '' ).split('/');
        }
    }
    
    return route;
}