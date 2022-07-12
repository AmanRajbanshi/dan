const Contact = require("../models/contact");


module.exports.Post_Contact = async (req, res) => {
    const newContact = new Contact(req.body);
    try {
      const insertContact = await newContact.save();
      res.status(201).json(insertContact);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  };
  
  module.exports.get_Contact = async (req, res) => {
    try {
      const getContact = await Contact.find({});
      res.json(getContact);
    } catch (error) {
      res.status(400).json("something goes wrong");
      console.log(error);
    }
  };
  
  module.exports.update_Contact = async (req, res) => {
    try {
      const _id = req.params.id;
      const updateContact = await Contact.findByIdAndUpdate({ _id }, req.body);
      res.json(updateContact);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  };
  
  module.exports.delete_Contact = async (req, res) => {
    try {
      const _id = req.params.id;
      const deleteContact = await Contact.findByIdAndDelete({ _id });
      res.json(deleteContact);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  };
  