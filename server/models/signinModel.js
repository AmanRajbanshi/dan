const mongoose = require("mongoose");
const signinSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true,"name is required"],
    trim: true,
  },
  email: {
    type: String,
    required:[true,"email is required"],
    trim: true,
  },
  password: {
    type: String,
    required:[true,"password is required"],
    trim: true,
  },
 
});

module.exports = mongoose.model("SignIn", signinSchema);
