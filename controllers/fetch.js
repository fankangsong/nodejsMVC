var fs = require('fs');
var config = require('../config');



exports.start = function(args){
	this.renderJson({
		'a': 1,
		'b': 2
	})
}