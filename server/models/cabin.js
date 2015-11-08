var mongoose = require('mongoose-q')
(require('mongoose'), {spread:true});
var Schema = mongoose.Schema;

var Cabin = new Schema({
  town: String,
  sleeps: Number,
  availFeb: Boolean
});

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/cabins');

module.exports = mongoose.model('cabins', Cabin);

