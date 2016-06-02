var mongoose = require('mongoose');
var Message = mongoose.model('Message');

module.exports = {
	show: function(req, res) {
      Message.find({}, false, true).populate('_comments').exec(function(err, messages){
   	   res.render('index.ejs', {messages: messages});
   	});
	},
	create: function(req, res) {
      var newMessage = new Message({name: req.body.name, delivery_date: req.body.delivery_date, location: req.body.location});
   	newMessage.save(function(err){
   		if(err){
   			console.log(err);
   			res.render('index.ejs', {errors: newMessage.errors});
   		} else {
   			console.log("success");
   			res.redirect('/');
   		}
   	})
	}
}
