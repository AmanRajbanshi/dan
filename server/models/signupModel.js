const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const signupSchema = new mongoose.Schema({
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
  phoneNumber: {
    type: Number,
    required:[true,"phoneNumber is required"],
    trim: true,
  },
  password: {
    type: String,
    required:[true,"password is required"],
    trim: true,
  },
  confirmPassword: {
    type: String,
    required:[true,"confirmPassword is required"],
    trim: true,
  },
  gender: {
    type: String,
    enum:['male','female',"other"],
    required:[true,"gender is required"],
    trim: true,
  },
});

signupSchema.pre('save',async function(next){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt);
  this.confirmPassword = await bcrypt.hash(this.confirmPassword,salt);

})

module.exports = mongoose.model("SignUp", signupSchema);
