const SignIn = require("../models/signinModel");


module.exports.Post_SignIn = async (req, res) => {
    const newSignIn = new SignIn(req.body);
    try {
      const insertSignIn = await newSignIn.save();
      res.status(201).json(insertSignIn);
     // console.log(insertSignIn);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };
  
  module.exports.get_SignIn = async (req, res) => {
    try {
      const getSignIn = await SignIn.find({});
      res.json(getSignIn);
    } catch (error) {
      res.status(400).json("something goes wrong");
      console.log(error);
    }
  };
  
  module.exports.update_SignIn = async (req, res) => {
    try {
      const _id = req.params.id;
      const SignIn = await SignIn.findByIdAndIndate({ _id }, req.body);
      res.json(SignIn);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  };
  
  module.exports.delete_SignIn = async (req, res) => {
    try {
      const _id = req.params.id;
      const deleteSignIn = await SignIn.findByIdAndDelete({ _id });
      res.json(deleteSignIn);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  };
  