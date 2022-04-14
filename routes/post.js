const express = require('express')
const router = express.Router()
const { product} = require('../controllers/post.js')
const {getProduct} = require('../controllers/get.js')

router.post('/product', product)

router.get('/getProduct', getProduct)

module.exports = router
