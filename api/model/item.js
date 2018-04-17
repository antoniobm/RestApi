'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ItemSchema = Schema({
    name: String,
    image: String
})

module.exports = mongoose.model('Item', ItemSchema)