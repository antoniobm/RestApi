'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const routes = require('./routes/itemRoutes')
const config = require('./config/apiConfig')

//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//routes
app.use(routes)

//connect DB
mongoose.connect(config.db, (err, res) => {
    if(err){
        return console.log(`Unable to connect to the Database: ${err}`)
    }
    app.listen(config.port, () => {
        console.log(`Rest api working on http://localhost:${config.port}`)
    })
})