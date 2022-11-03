/*
passport.js (serialize) for app
Inhee Park (301162514)
October 21st, 2022
*/

// importing passport module
const passport = require('passport');

// export functions 
module.exports = function() {
  // local authentication database
  // we will compare on this database
  const User = require('../models/user');
  
  // when a user is authenticated, Passport will
  // save its _id property to the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // later on when the user object is needed, 
  // passport will use the _id property to grab
  // the user object from the database 
  passport.deserializeUser((id, done) => {
    User.findOne({
      _id: id
    }, 
    '-password -salt', 
    (err, user) => {
      done(err, user);
    });
  });

  // exports the function from ./local file
  require('./local')();
};

