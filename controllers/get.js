const bcrypt = require('bcryptjs')
const { Product } = require('../models')


const getProduct = async (req, res) => {
    try {
        const { id } = req?.params

        Product.find({ userId: id }, (err, data) => {
            if (err) {
                console.log("err", err)

                return res.send({ success: false, message: "Somethging Went Wrong" })
            }
            console.log('userId', id)
            return res.send({ success: true, data })
        }).populate({path: "userId" , select: "username _id email "})

        // console.log(id)
        // const getAllProduct = await Product.find({ }).populate({path: "userId" , select: "username _id email "})
        // return res.send({ success: true, getAllProduct })

    } catch (e) {
        console.log(e)
        return res.send({ success: false, message: 'Something Went Wrong!' })
    }
}

module.exports = { getProduct }