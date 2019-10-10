const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pettracker", {
  useNewUrlParser: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
