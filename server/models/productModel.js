const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true,"name is required"],
    trim: true,
  },
  description: {
    type: String,
    required:[true,"description is required"],
    trim: true,
  },
  quantity: {
    type: Number,
    required:[true,"quantity is required"],
    trim: true,
  },
  price: {
    type: Number,
    required:[true,"price is required"],
    trim: true,
  },
  productreview: {
    type: Schema.Types.ObjectId,
    ref: "Review",
    required:[true,"Product Review"]
  },
  color: {
    type: String,
    required:[true,"color is required"],
    trim: true,
  },
  size: {
    type: String,
    required:[true,"size is required"],
    trim: true,
  },
  discount: {
    type: String,
    required:[true,"Discount is required"],
    trim: true,
  },
  stock:{
    type:Number,
    trim:true,
  }
 
});

module.exports = mongoose.model("Product", productSchema);
