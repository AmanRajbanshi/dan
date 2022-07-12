const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true,"contact is required"],
    trim: true,
  }
});

module.exports = mongoose.model("Contact", contactSchema);
