/*
inventory data model schema for app
Inhee Park (301162514)
October 21st, 2022
*/

let mongoose = require('mongoose');

// model schema for 
// inventory list
let inventoryModel = mongoose.Schema(
    {
        item: String,
        qty: Number,
        tags: [],
        status: String,
        size: {
            h: Number,
            w: Number,
            uom: String
        }
    },
    {
        collection: "inventory"
    }
);

module.exports = mongoose.model('Inventory', inventoryModel);