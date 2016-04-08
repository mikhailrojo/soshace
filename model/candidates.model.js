var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var candidateSchema = new Schema({
	name: String,
	time: String,
	place: String
});

module.exports = mongoose.model('Candidates', candidateSchema);