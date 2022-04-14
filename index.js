require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const server = require('http').createServer(app)
const PORT = process.env.PORT || 4000
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/POPULATE-DB");
app.use(bodyParser.json())
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes'))

server.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`)
})