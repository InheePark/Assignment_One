let mongoose = require('mongoose');

// Create a model class
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