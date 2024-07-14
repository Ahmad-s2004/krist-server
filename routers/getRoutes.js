const express = require('express')
const router = express.Router()
const {getMenData, getMenDataById} = require('../controllers/men.js')
const {getWomenData, getWomenDataById} = require('../controllers/women.js')
const {getKidsData, getKidsDataById} = require('../controllers/kids.js')
const {getProducts, getKidsProducts, getMenProducts ,getWomenProducts} = require('../controllers/products.js')


// MEN Routes
router.get('/getMen', getMenData)
router.get('/getMen/:_id', getMenDataById)


// WOMEN ROUTES
router.get('/getWomen', getWomenData)
router.get('/getWomen/:_id', getWomenDataById)

// KIDS ROUTES
router.get('/getKids', getKidsData)
router.get('/getKids/:_id', getKidsDataById)

// Products

router.get('/getProducts', getProducts)
router.get('/getKidsProducts', getKidsProducts)
router.get('/getMenProducts', getMenProducts)
router.get('/getWomenProducts', getWomenProducts)


module.exports = router