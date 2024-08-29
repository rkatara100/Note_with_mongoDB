const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/testapp");


const userSchema = mongoose.Schema({
      name: String,
      email: String,
      image: String
});


module.exports = mongoose.model("user", userSchema);
