const kids = require('../models/kids.js');

const getKidsData = async (req, res) => {
    const limit = req.query.limit
    try {
        let response
        if(limit>0){
            response = await kids.find().limit(limit);
        }else{
            response = await kids.find();
        }

        if (!response || response.length === 0) {
            return res.status(404).send({ message: "No kids's data found." }); 
        }

        res.status(200).send(response);
    } catch (error) {
        console.error("Error fetching men's data:", error);
        res.status(500).send({ message: "An error occurred while fetching men's data." }); 
    }
};


const getKidsDataById = async (req, res) => {
    try {
        let response = await kids.findById({_id:req.params._id});

        if (!response || response.length === 0) {
            return res.status(404).send({ message: "No kids's data found." }); 
        }

        res.status(200).send(response);
    } catch (error) {
        console.error("Error fetching men's data:", error);
        res.status(500).send({ message: "An error occurred while fetching men's data." }); 
    }
};


module.exports = {
    getKidsData,
    getKidsDataById
};

