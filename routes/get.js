const express = require('express')
const router = express.Router()
const { getProduct } = require('../controllers/get.js')

router.get('/getProduct/:id', getProduct)


module.exports = router
