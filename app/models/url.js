var mongoose = require('mongoose');
var randtoken = require('rand-token');

var urlSchema = new mongoose.Schema({
	url: String,
	shortenUrl: String,
	created: Date
});

urlSchema.pre('save', function(next){
	this.created = new Date();
	this.shortenUrl = randtoken.generate(10);
	next();
});

module.exports = mongoose.model('Url', urlSchema);