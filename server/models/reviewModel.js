const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true,"name is required"],
    trim: true,
  },
  review: {
    type: Number,
    required:[true,"Review is required"],
    trim: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
