const user = require('../models/user');
const men = require('../models/men')
const address = require('../models/address')
const bcrypt = require('bcryptjs')
const order = require('../models/orders')
const card = require('../models/cards');
const jwt = require('jsonwebtoken');
const key = 'ahmad2006'

const signup = async (req, res) => {
    const { name, email, password, phone } = req.body;

    try {

        let existingUser = await user.findOne({ email });
        let bcryptPassword = bcrypt.hashSync(password, 10)
        if (!email || !name || !password || !phone) {
            return res.status(200).json({ message: "All fields are required" });
        }
        if (existingUser) {
            return res.status(200).json({ message: "User already exists. SignIn instead" });
        } else {
            await user.create({ name, email, password: bcryptPassword, phone });
            return res.status(201).json({ message: "User created successfully." });
        }
    } catch (err) {
        console.error("Error in signup:", err);
        return res.status(500).json({ message: "Server error" });
    }
};

const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(203).json({ message: "Enter all fields" });
        }
        let findUser = await user.findOne({ email });
        if (!findUser) {
            return res.status(404).json({ message: "User does not exist. SignUp instead" });
        }
        let compPass = bcrypt.compareSync(password, findUser.password);
        if (!compPass) {
            return res.status(203).json({ message: "Incorrect password" });
        }
        let token = jwt.sign({ id: findUser._id }, key);
        res.cookie('token', token, { httpOnly: true });

        return res.status(200).json({ message: "Login successful", user: findUser, token });
    } catch (err) {
        console.error("Error in signin:", err);
        return res.status(500).json({ message: "Server error" });
    }
};


let getUser = async (req, res) => {

    if (!req.user || !req.user.id) {
        return res.status(400).json({ message: "User not found in request" });
    }

    let _id = req.user.id;

    try {
        let findData = await user.findOne({ _id });
        if (!findData) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(201).json({ message: "Data found", findData });
    } catch (err) {
        console.error("Error in getUser controller:", err);
        res.status(500).json({ message: "Server error" });
    }
};

const getAddress = async (req, res) => {
    const { id } = req.user;
const { name, phone, email, addresses, city, country, postal } = req.body;

try {
  // Find the user by ID and exclude the password field
  let findData = await user.findOne({ _id: id }, "-password");
  if (!findData) {
    return res.status(404).json({ message: "User not found" });
  }

  // Create a new address for the user
  let postData = await address.create({
    userId: findData._id,
    name,
    phone,
    email,
    addresses,
    city,
    country,
    postal,
  });

  // Add the new address ID to the user's address array
  findData.address.push(postData._id);
  await findData.save();

  console.log("Address added:", postData);
  return res.status(201).json({ message: "Address added successfully", data: findData });
} catch (error) {
  console.error("Error in getAddress handler:", error);
  return res.status(500).json({ message: "Internal server error", id });
}

};

const getCard = async (req, res) => {
    const { id } = req.user;
    const { name, cardNumber, expire, cvv, email } = req.body;
  
    try {
      let findData = await user.findOne({ _id: id }, "-password");
      if (!findData) {
        return res.status(404).json({ message: "User not found" });
      }
  
      let postData = await card.create({
        userId: findData._id,
        name,
        cardNumber,
        expire,
        cvv,
        email
      });
  
      // Assuming you have a card array in your user schema
      findData.card.push(postData._id);
      await findData.save();
  
      console.log("Card added:", postData);
      return res.status(201).json({ message: "Card added successfully", data: findData });
    } catch (error) {
      console.error("Error in getCard handler:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  
let getOrder = async (req, res) => {
    let _id = req.user.id
    const { addressId, cardId, productId, quantity, size } = req.body
    try {
        let findData = await user.findOne({ _id }, "-password")
        let fetchData = await men.findOne({ _id: productId })
        let postData = await order.create({ userId: findData._id, addressId, title: fetchData.title, cardId, productId, quantity, size })
        findData.card.push(postData._id)
        findData.save()
        return res.status(201).json({ message: "Address added successfully", findData, postData })

    } catch (error) {
        return res.status(500).json({ message: "Internal sever error", })
    }

}

const getAllOrder = async (req, res) => {
    let _id = req.user.id
    try {
        let findData = await user.findOne({ _id }, "-password")
        let postData = await order.find()
        return res.status(201).json({ message: "Address added successfully", findData, postData })

    } catch (error) {
        return res.status(500).json({ message: "Internal sever error", })
    }
}
const getAllAddress = async(req, res) =>{
    try {
        let fetchedData = await address.find()
        return res.status(200).json(fetchedData)
    } catch (error) {
        return res.status(500).json({message:"Internal server error"})        
    }
}
const removeAddress = async(req, res) =>{
    let {_id} = req.params;
    console.log(_id, "ID")
    try {
        let fetchedData = await address.deleteOne({_id})
        return res.status(200).json({messsage:"Removed"})
    } catch (error) {
        return res.status(500).json({message:"Internal server error"})        
    }
}

module.exports = {
    signup,
    signin,
    getUser,
    getAddress,
    getCard,
    getOrder,
    getAllAddress,
    removeAddress
};
