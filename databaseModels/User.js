const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  surname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("user", UserSchema);
