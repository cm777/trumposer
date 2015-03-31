var trumpet = require('trumpet');
var fs = require('fs');
var request = require('request');
var path = require('path');


function trumposer (req, res) {

	if (req.params[0] === '/'){
		return res.status(404).end();
	}

	var source = path.join(__dirname, '/views', req.params[0]);
	// var source = path.join(__dirname, '/views', req._parsedUrl.pathname);

	fs.exists(source, function(exists) {
		if (!exists) {
			return res.status(404).end();
		}

		var tpt = trumpet();

		tpt.pipe(res);

		tpt.selectAll('.section', function (span) {
			// fs.createReadStream(span.getAttribute('data-file')).pipe(span.createStream({outer: true}));
			request(span.getAttribute('data-url')).pipe(span.createStream({outer: true}));
		});

		return fs.createReadStream(source).pipe(tpt);
	});

}

module.exports = trumposer;
