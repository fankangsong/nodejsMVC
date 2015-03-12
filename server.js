var http = require('http');
var querystring = require('querystring');
var url = require('url');
var requestHandler = require('./core/requestHandler');


exports.run = function(port){
	port = port || 8888;
	http.createServer(function(req, res){
		var _postData = '';
		req.on('data', function(chunk){

		})
		.on('end', function(){
			req.post = querystring.parse(_postData);
			requestHandler(req, res);
		});
	}).listen(port);

	console.log('localhost:' + port);
}