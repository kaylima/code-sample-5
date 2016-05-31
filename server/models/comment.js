var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	text: String,
	_message: {
      type: mongoose.Schema.ObjectId,
      ref: 'Message'
   }
});

CommentSchema.path('text').required(true, 'Comment cannot be blank!');
var Comment = mongoose.model("Comment", CommentSchema);
