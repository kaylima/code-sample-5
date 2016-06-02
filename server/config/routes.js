var mongoose = require('mongoose');
var messages = require('../controllers/messages.js');
var comments = require('../controllers/comments.js');

module.exports = (function(app) {
	app.get('/', function (req, res) {
		messages.show(req, res);
	})
	app.post('/message/', function (req,res) {
		messages.create(req, res);
	})
	app.post('/comment/:id', function (req, res) {
		comments.create(req, res);
	})
});
