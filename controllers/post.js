const bcrypt = require('bcryptjs')
const {Product} = require('../models')


const product = (req, res) => {
    try {
        const { body } = req
        const name = body?.name
        const price= body?.price
        const userId = body?.userId
        let data = { name, price, userId }

        let addData = new Product(body)
        addData.save()

        return res.send({ success: true, data })
        
    } catch (e) {
        return res.send({ success: false, message: 'Something Went Wrong!' })
    }
}

module.exports = { product }