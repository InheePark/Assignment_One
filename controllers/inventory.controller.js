// create a reference to the model
let Inventory = require('../models/inventory.model');

exports.inventoryList = function(req, res, next) {  
    
    Inventory.find((err, inventoryList) => {
        // console.log(inventoryList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('inventory/list', {
                title: 'Inventory List', 
                InventoryList: inventoryList
            })            
        }
    });
}