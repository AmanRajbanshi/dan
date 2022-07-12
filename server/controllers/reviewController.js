const Review = require("../models/reviewModel");


module.exports.Post_Review = async (req, res) => {

  const {review} = req.body;
  if(review == 1){
    return res.json({message:"very poor"});
  }
  else if(review == 2){
    return res.json({message:"bad"});
  }
  else if(review == 3){
 return res.json({message:"good"});
  }
  else if(review == 4){
    return res.json({message:"very good"});
  }
  else if(review == 5){
    return res.json({message:"wow excellent"});
  };

    const newReview = new Review(req.body);
    try {
      const insertReview = await newReview.save();
      res.status(201).json(insertReview);
     // console.log(insertReview);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };
  
  module.exports.get_Review = async (req, res) => {
    try {
      const getReview = await Review.find({});
      res.json(getReview);
    } catch (error) {
      res.status(400).json("something goes wrong");
      console.log(error);
    }
  };
  
  module.exports.update_Review = async (req, res) => {
    try {
      const _id = req.params.id;
      const Review = await Review.findByIdAndIndate({ _id }, req.body);
      res.json(Review);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  };
  
  module.exports.delete_Review = async (req, res) => {
    try {
      const _id = req.params.id;
      const deleteReview = await Review.findByIdAndDelete({ _id });
      res.json(deleteReview);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  };
  