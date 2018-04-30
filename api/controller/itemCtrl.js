'use strict'

const Item = require('../model/item')

//Get all items 
function getItems (req, res) {
    Item.find( {}, (err, item) => {
        if(err) return res.status(500).send({ message: `Error making request to server: ${err}`})
        if(!item) return res.status(404).send({ message: 'Items does not exist.'})
        res.status(200).json({item})
    })
}

//Get item by Id
function getItem (req, res) {
    let itemId = req.params.itemId

    Item.findById( itemId, (err, item) => {
        if(err) return res.status(500).send({ message: `Error making request to server: ${err}`})
        if(!item) return res.status(404).send({ message: 'Item does not exist'})
        res.status(200).json({item: item})
    })
}

//Add item
function addItem (req, res) {
    let item = new Item()
    item.name = req.body.name
    item.image = req.body.image

    item.save((err, savedItem) => {
        if(err) return res.status(500).send({ message: `Error adding data to database: ${err}`})
        res.status(200).send({item: savedItem, message: 'Item added'})
    })
}

//Update item by Id
function updateItem (req, res){
    Item.findById(req.params.itemId, function (err, item){
        if (!item) {
            return res.status(500).send('Can not load document')}
        else{
            item.name = req.body.name
            item.image = req.body.image
            item.save()
                .then(item => {
                    res.status(200).json({item: item})
                })
                .catch(err => {
                    res.status(400).send('Could not update the item')
                })
            }
        })
}

// Delete item by Id
function deleteItem (req, res){
    let itemId = req.params.itemId

    Item.findByIdAndRemove( itemId, (err, deletedItem) => {
            if(err) return res.status(500).send({ message: `Error making request to server: ${err}`})
            if(!deletedItem) return res.status(404).send({ message: 'Item does not exist'})
            res.status(200).send({ message: 'Correctly deleted item'})
        })
}

module.exports = {
    getItems,
    getItem,
    addItem,
    updateItem,
    deleteItem
}