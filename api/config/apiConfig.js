'use strict'

module.exports = {
    port: process.env.port || 3000,
    db: process.env.mongodb || 'mongodb://localhost/item'
}