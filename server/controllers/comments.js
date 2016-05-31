var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Message = mongoose.model('Message');

module.exports = {
	create: function(req, res) {
      var message_id = req.params.id;
   	Message.findOne({_id: message_id}, function(err, message){
   		var newComment = new Comment({text: req.body.comment});
   		newComment._message = message._id;
   		Message.update({_id: message._id}, {$push: {"_comments": newComment}}, function(err){
   		});
   		newComment.save(function(err){
   			if(err){
   				console.log(err);
   				res.render('index.ejs', {errors: newComment.errors});
   			} else {
   				console.log("comment added");
   				res.redirect("/");
   			}
   		});
   	});
	}
}
