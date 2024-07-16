const express = require('express')
const router = express.Router()
let {signup, signin, getUser, getAddress, getCard, getOrder, getAllAddress, removeAddress} = require('../controllers/user')
const isLoggedIn = require('../middleware/isLogIn')


router.post("/signup", signup)
router.post("/signin", signin)
router.get("/getUser", isLoggedIn , getUser)
router.post("/getAddress" , getAddress)
router.post("/getCard", isLoggedIn , getCard)
router.post("/getOrder", isLoggedIn , getOrder)

router.get("/getAllAddress", getAllAddress)
router.delete("/removeAddress/:_id", removeAddress)

module.exports = router