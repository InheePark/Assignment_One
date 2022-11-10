/*
inventory view controller for app
Inhee Park (301162514)
October 21st, 2022
*/

// create a reference to the model
let Inventory = require('../models/inventory.model');

function getErrorMessage(err) {    
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } 
    if (err.message) {
        return err.message;
    } else {
        return 'Unknown server error';
    }
};

// render the inventory list view function
// we export this function 
exports.inventoryList = function(req, res, next) {  
    
    Inventory.find((err, inventoryList) => {
        // arrow function for finding data model 
        if(err)
        {
            // err -> when error occrus for .find 
                console.error(err);

                res.status(400).json({
                    success: false, 
                    message: getErrorMessage(err)
                })
        }
        else
        {
            res.json(inventoryList);        
        }
    });
}



// assign value of the editted value to the inventory list 
module.exports.processEdit = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Inventory({
        _id: id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size : {
            h: req.body.size.h,
            w: req.body.size.w,
            uom: req.body.size.uom,
        },
        tags: req.body.tags.split(",").map(word => word.trim())
    });

    // console.log(updatedItem);

    Inventory.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.error(err);

            res.status(400).json({
                success: false, 
                message: getErrorMessage(err)
            })
        }
        else
        {
            res.status(200).json({
                success: true, 
                message: "item updated successfully"
            });
        }
    });
}

// display add view to the app


// assign value of added values to the inventory list
module.exports.processAdd = (req, res, next) => {
    let newItem = Inventory({
        _id: req.body.id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size : {
            h: req.body.size.h,
            w: req.body.size.w,
            uom: req.body.size.uom,
        },
        tags: req.body.tags.split(",").map(word => word.trim())
    });

    Inventory.create(newItem, (err, item) =>{
        if(err)
        {
            console.error(err);

            res.status(400).json({
                success: false, 
                message: getErrorMessage(err)
            })
        }
        else
        {
            console.log(item);
            res.status(200).json(item);
        }
    });

}

// delete the specified record
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Inventory.remove({_id: id}, (err) => {
        if(err)
        {
            console.error(err);

            res.status(400).json({
                success: false, 
                message: getErrorMessage(err)
            })
        }
        else
        {
            res.status(200).json({
                success: true, 
                message: "item successfuly removed"
            })
        }
    });
}