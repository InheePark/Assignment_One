/*
db.js file for app
inhee park (301162514)
October 21st, 2022
*/

let atlasDB = "mongodb+srv://dbuser:dbuser@cluster005.asvptdk.mongodb.net/products?retryWrites=true&w=majority";
// connection string of the mongodb database
// require username, password, and database name for the database
// one database has many collections

let config = require('./config');

let mongoose = require('mongoose');
// mongoose module
// a npm module used to connect db to app

// function to export to other file
// this function is to connect the app to the mongodb database using mongoose module
module.exports = function(){
    
    mongoose.connect(config.ATLASDB);
    // connecting to mongoose with the string provided

    // functions write on console about connection
    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('==== Connected to MongoDB ====');
        // console log once connected
    });

    return mongodb;
}