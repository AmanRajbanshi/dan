const Signup = require("../models/signupModel");


module.exports.Post_Signup = async (req, res) => {
    const newSignup = new Signup(req.body);
    try {
      const insertSignup = await newSignup.save();
      res.status(201).json(insertSignup);
      // console.log(insertSignup);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };
  
  module.exports.get_Signup = async (req, res) => {
    try {
      const getSignup = await Signup.find({});
      res.json(getSignup);
    } catch (error) {
      res.status(400).json("something goes wrong");
      console.log(error);
    }
  };
  
  module.exports.update_Signup = async (req, res) => {
    try {
      const _id = req.params.id;
      const updateSignup = await Signup.findByIdAndUpdate({ _id }, req.body);
      res.json(updateSignup);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  };
  
  module.exports.delete_Signup = async (req, res) => {
    try {
      const _id = req.params.id;
      const deleteSignup = await Signup.findByIdAndDelete({ _id });
      res.json(deleteSignup);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  };
  