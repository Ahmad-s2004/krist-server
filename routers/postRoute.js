const express = require('express')
const router = express.Router()
let {signup, signin, getUser, getAddress, getCard, getOrder, getAllAddress, removeAddress, getUserAddress} = require('../controllers/user')
const isLoggedIn = require('../middleware/isLogIn')


router.post("/signup", signup)
router.post("/signin", signin)
router.get("/getUser", isLoggedIn , getUser)
router.post("/getAddress", isLoggedIn , getAddress)
router.post("/getCard", isLoggedIn , getCard)
router.post("/getOrder", isLoggedIn , getOrder)

router.get("/getAllAddress", getAllAddress)
router.get("/getUserAddress", getUserAddress)

router.delete("/removeAddress/:_id", removeAddress)

module.exports = router