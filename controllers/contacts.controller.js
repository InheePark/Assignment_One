/*
contacts views controller for app
Inhee Park (301162514)
October 21st, 2022
*/

// create a reference to the model
let Contacts = require('../models/contacts.model');

// display the contacts page
exports.contactsList = function(req, res, next) {  
    
    Contacts.find((err, contactsList) => {
        // console.log(inventoryList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('contacts/list', {
                title: 'Contacts List', 
                ContactsList: contactsList,  
                username: req.user ? req.user.username : ''
            })            
        }
    }).sort({"Name": 1});
}

// display the the edit page function
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contacts.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contacts/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit, 
                username: req.user ? req.user.username : ''
            })
        }
    }).sort({"Name": 1});
}

// function for assigning values of the editted value
// to the contacts 
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Contacts({
        _id: req.body.id,
        Name: req.body.Name, 
        Number: req.body.Number, 
        Email: req.body.Email
    });

    // console.log(updatedItem);

    Contacts.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/contacts/list');
        }
    }).sort({"Name": 1});
}

// function for displaying the add page for contacts
module.exports.displayAddPage = (req, res, next) => {
    let newItem = Contacts();

    res.render('contacts/add_edit', {
        title: 'Add a new Item',
        item: newItem, 
        username: req.user ? req.user.username : ''
    });          
}

// function for adding new contacts
module.exports.processAddPage = (req, res, next) => {
    let newItem = Contacts({
        _id: req.body.id,
        Name: req.body.Name, 
        Number: req.body.Number, 
        Email: req.body.Email
    });

    Contacts.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/contacts/list');
        }
    });

}


// delete contacts lists function
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contacts.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contacts/list');
        }
    });
}