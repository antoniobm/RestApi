'use strict'

const express = require('express')
const router = express.Router()
const ItemCtrl = require('../controller/itemCtrl')

router.get('/item', ItemCtrl.getItems)
router.get('/item/:itemId', ItemCtrl.getItem)
router.post('/item', ItemCtrl.addItem)
router.put('/item/:itemId', ItemCtrl.updateItem)
router.delete('/item/:itemId', ItemCtrl.deleteItem)

module.exports = router