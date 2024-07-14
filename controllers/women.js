const women = require('../models/women.js');

const getWomenData = async (req, res) => {
    try {
        let response = await women.find();

        if (!response || response.length === 0) {
            return res.status(404).send({ message: "No women's data found." }); 
        }

        res.status(200).send(response);
    } catch (error) {
        console.error("Error fetching men's data:", error);
        res.status(500).send({ message: "An error occurred while fetching men's data." }); 
    }
};


const getWomenDataById = async (req, res) => {
    try {
        const{_id} = req.params
        if (!_id) {
            return res.status(400).send({ message: "Invalid or missing ID parameter." });
          }
        let response = await women.findById(_id);

        if (!response || response.length === 0) {
            return res.status(404).send({ message: "No women's data found." }); 
        }

        res.status(200).send(response);
    } catch (error) {
        console.error("Error fetching men's data:", error);
        res.status(500).send({ message: "An error occurred while fetching men's data." }); 
    }
};


module.exports = {
    getWomenData,
    getWomenDataById
};

