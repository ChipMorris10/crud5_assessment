var mongoose = require('mongoose-q')
(require('mongoose'),{spread:ture});
var Schema = mongoose.Schema;

var Cabin = new Schma({
  town: String,
  sleeps: Number,
  availFeb: Boolean
});

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/cabins');
module.exports = mongoose.model("cabins", Cabin);

