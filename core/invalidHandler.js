/*invalidHandler*/

exports.handle404 = function(req, res) {
	res.writeHead(404, {'Content-Type': 'text/plain'});
	res.end('404 page not found');
};

exports.handle500 = function(req, res, err) {
	res.writeHead(500, {});
	res.end('500, ' + err);
};