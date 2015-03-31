var trumposer = require('./trumposer');
var express = require('express');
var app = express();


app.get('/header', function (req, res) {
	return res.send('<p>this is the header</p>');
});

app.get('/main', function (req, res) {
	return res.send('<p>this is the main</p>');
});

app.get('/footer', function (req, res) {
	return res.send('<p>this is the footer</p>');
});


app.get('*', trumposer);

app.listen(3000, function () {
	return;
});
