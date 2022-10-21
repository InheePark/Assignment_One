/*
Business Contacts data model Schema for app
Inhee Park (301162514)
October 21st, 2022
*/

let mongoose = require('mongoose');

// model shema for
// user business contacts lists
let contactsModel = mongoose.Schema(
    {
        Name: String,
        Number: Number,
        Email: String
    },
    {
        collection: "contacts"
    }
);

module.exports = mongoose.model('Contacts', contactsModel);