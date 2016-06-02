var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
	name: String,
	delivery_date: String,
	location: String,
	_comments: [{
      type: mongoose.Schema.ObjectId,
      ref: 'Comment'
   }]
});

MessageSchema.path('name').required(true, 'Name cannot be blank!');
MessageSchema.path('delivery_date').required(true, 'Date cannot be blank!');
MessageSchema.path('location').required(true, 'Location cannot be blank!');
var Message = mongoose.model("Message", MessageSchema);
