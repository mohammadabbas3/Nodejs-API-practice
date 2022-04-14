const bcrypt = require('bcryptjs')
const { response } = require('express')
const { Signup } = require('../models')
const signUp = (req, res) => {
    try {
        const { body } = req
        let addData = new Signup(body)
        addData.save()
        console.log('data',addData)
        return res.send({ success: true, addData })
    } catch (e) {
        return res.send({ success: false, message: 'Something Went Wrong!' })
    }
}

const login = (req, res) => {
    try {
        const { body } = req
        const email = body?.email
        const password = body?.password
        if (!email || !password) {
            res.send({ success: false, message: 'Please fill all required fields' })
        }
        Signup.findOne({ email: email }, async (err, data) => {
            if (err || !data) {
                res.send({ success: false, message: 'Email Went Wrong' })
            }

            let getPassword = data?.password
            console.log("data", data)
            console.log('getPassword', getPassword)
            console.log('password', password)
            if (getPassword !== password) {
                return res.send({ success: false, message: 'password Went Wrong' })
            }

            return res.send({ success: true, message: "User Login Successfully", data })
        })
    } catch (e) {
        return res.send({ success: false, message: 'Something Went Wrong!' })
    }
}


module.exports = { signUp, login }