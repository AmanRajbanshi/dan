const Product = require("../models/productModel");
const APIFeatures = require('../helper/apifeatures')

module.exports.Post_Product = async (req, res) => {
    const newProduct = new Product(req.body);
    
    try {
      const insertProduct = await newProduct.save();
      res.status(201).json(insertProduct);
    } catch (error) {
      res.status(400).json(error);
    }
  };



  
  module.exports.get_ProductByPagination = async (req, res) => {
    try {
      const resPerPage = 1;
 const productCount = await Product.countDocuments(); 
  const apiFeatures = new APIFeatures(Product.find(),req.query).pagination(resPerPage)
  const product = await apiFeatures.query;

      res.json({
        count:product.length,
        productCount,
        product,
        
      });
    } catch (error) {
      res.status(400).json("something goes wrong");
    }
  };

  module.exports.get_Product = async (req, res) => {
    try {
      // const getProduct = await Product.find({}).populate('productreview');
      const getProduct = await Product.find({}).populate("productreview");

      res.json(getProduct);
    } catch (error) {
      res.status(400).json("something goes wrong");
      console.log(error);
    }
  };

  module.exports.get_ProductByHighToLow = async (req, res) => {
    try {
      const getProduct = await Product.find({}).sort({price:-1});
      res.json(getProduct);
    } catch (error) {
      res.status(400).json("something goes wrong");
      console.log(error);
    }
  };
  module.exports.get_ProductByLowToHigh = async (req, res) => {
    try {
      const getProduct = await Product.find({}).sort({price:1});
      res.json(getProduct);
    } catch (error) {
      res.status(400).json("something goes wrong");
      console.log(error);
    }
  };
  module.exports.get_ProductbySearch = async (req, res) => {
    const regex = new RegExp(req.params.name, 'i');
    try {
      const getProduct = await Product.find({name:regex});
      res.json(getProduct);
    } catch (error) {
      res.status(400).json("something goes wrong");
      console.log(error);
    }
  };
  module.exports.get_ProductById = async (req, res) => {
    try {
      const getProduct = await Product.findById(req.params.id);
      res.json(getProduct);
    } catch (error) {
      res.status(400).json("something goes wrong");
      console.log(error);
    }
  };
  
  module.exports.update_Product = async (req, res) => {
    try {
      const _id = req.params.id;
      const Product = await Product.findByIdAndUpdate({ _id }, req.body);
      res.json(Product);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  };
  
  module.exports.delete_Product = async (req, res) => {
    try {
      const _id = req.params.id;
      const deleteProduct = await Product.findByIdAndDelete({ _id });
      res.json(deleteProduct);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  };
  