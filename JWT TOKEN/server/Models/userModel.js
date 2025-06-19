const mongoose = require("mongoose");
const usrSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
module.exports = mongoose.model("usr", usrSchema);
