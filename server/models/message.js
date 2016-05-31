var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
	name: String,
	message: String,
	_comments: [{
      type: mongoose.Schema.ObjectId,
      ref: 'Comment'
   }]
});

MessageSchema.path('name').required(true, 'Name cannot be blank!');
MessageSchema.path('message').required(true, 'Date cannot be blank!');
var Message = mongoose.model("Message", MessageSchema);
