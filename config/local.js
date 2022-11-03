/*
local.js (authenticate) for app
Inhee Park (301162514)
October 21st, 2022
*/

// importing passport module
const passport = require('passport');
// importing local sessions login / log out sessions 
const LocalStrategy = require('passport-local').Strategy;
// data the passport authentication will use 
// local database 
const User = require('../models/user');

// module we will export
module.exports = function() {
    console.log('===> localStorage function'); 

    // we will locally authenticate with passport module
    passport.use(new LocalStrategy(authLocal));
};

// authenticate function 
// search User database with given parameters
function authLocal(username, password, done){
    console.log('======> authLocal function');
    
    // (database name).findOne() -> find a record with given parameters
    User.findOne({username: username}, (err, user)=>{
        if (err) {
            return done(err);
        }
        
        if (!user) {
            return done(null, false, {
                message: 'Unknown user'
            });
        }

        if (!user.authenticate(password)) {
            return done(null, false, {
                message: 'Invalid password'
            });
        }
        
        return done(null, user);
    });
}