let atlasDB = "mongodb+srv://dbuser:dbuser@cluster005.asvptdk.mongodb.net/products?retryWrites=true&w=majority";

let mongoose = require('mongoose');

module.exports = function(){
    
    mongoose.connect(atlasDB);

    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('==== Connected to MongoDB ====');
    });

    return mongodb;
}