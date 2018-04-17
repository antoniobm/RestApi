'use strict'

module.exports = {
    port: process.env.port || 3001,
    db: process.env.mongodb || 'mongodb://localhost/item'
}