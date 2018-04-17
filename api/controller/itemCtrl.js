'use strict'

const Item = require('../model/item')

//Get all items 
function getItems (req, res) {
    Item.find( {}, (err, items) => {
        if(err) return res.status(500).send({ message: `Error making request to server: ${err}`})
        if(!items) return res.status(404).send({ message: 'Items does not exist.'})
        res.send(200, {items})
    })
}

//Get item by Id
function getItem (req, res) {
    let itemId = req.params.itemId

    Item.findById( itemId, (err, item) => {
        if(err) return res.status(500).send({ message: `Error making request to server: ${err}`})
        if(!item) return res.status(404).send({ message: 'Item does not exist'})
        res.send(200, {item})
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
    let itemId = req.params.itemId
    let update= req.body

    Item.findByIdAndUpdate(itemId, update, (err, itemUpdated) =>{
        if(err){
            return res.status(500).send({ message: `Item could not be updated: ${err}` })}
        else if (!itemUpdated){ 
            return res.status(404).send({ message: 'Item does not exist' })}
        else{
            res.status(200).send({message: 'Update complete'})
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