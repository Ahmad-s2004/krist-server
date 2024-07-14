const men = require('../models/men.js');

const getMenData = async (req, res) => {
    try {
        let response = await men.find();

        if (!response || response.length === 0) {
            return res.status(404).send({ message: "No men's data found." }); 
        }

        res.status(200).send(response);
    } catch (error) {
        console.error("Error fetching men's data:", error);
        res.status(500).send({ message: "An error occurred while fetching men's data." }); 
    }
};

const getMenDataById = async (req, res) => {
    try {
      const { _id } = req.params;
      if (!_id) {
        return res.status(400).send({ message: "Invalid or missing ID parameter." });
      }
  
      let response = await men.findById(_id);
  
      if (!response) {
        return res.status(404).send({ message: "No men's data found." });
      }
  
      res.status(200).send(response);
    } catch (error) {
      console.error("Error fetching men's data:", error);
      res.status(500).send({ message: "An error occurred while fetching men's data." });
    }
  };


module.exports = {
    getMenData,
    getMenDataById
};

