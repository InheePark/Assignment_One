/*
auth, login controller for app
Inhee Park (301162514)
October 21st, 2022
*/

let User = require('../models/user');
let passport = require('passport');

// import modules for signing in and signing up
let jwt = require('jsonwebtoken');
let config = require('../config/config'); // file for JWT config files

exports.user = function(req, res, next){
    res.render('users', {
        title: 'Users', 
        username: 'Student'
    });
}

// error function for login
function getErrorMessage(err){
    console.log('=====> Error: ' + err);
    let message = '';

    if(err.code){
        switch(err.code){
            case 11000:
            case 11001: 
                message = 'Username already exists';
                break;
            default: 
                message = 'Something went wrong';
        }
    }else{
        for(var errName in err.errors){
            if(err.errors[errName].message) message = err.errors[errName].message;
        }
    }

    return message;
};


// signup function for signup view
// process signup logic
module.exports.signup = function(req, res, next) {

  console.log(req.body);

  let user = new User(req.body);
  user.provider = 'local';
  console.log(user);

  user.save((err) => {
    if (err) {
      let message = getErrorMessage(err);
      // instead of res.render views, 
      // we return json format
      return res.status(400).json(
        {
          success: false, 
          message: message
        }
      );
    }
    // instead of res,render of views, 
    // we return json format
    return res.json(
      {
        success: true, 
        message: 'User created successfully!'
      }
    );
  });
};
   
// function for signin function
module.exports.signin = function(req, res, next){
  passport.authenticate(
    'login', 
  async (err, user, info) => {
    try {
      if (err || !user) {
        return res.status(400).json(
            { 
              success: false, 
              message: err || info.message
            }
          );
      }
      
      // requesting login function
      req.login(
          user,
          { session: false },
          async (error) => {
            if (error) {
              return next(error);
            }

            // Generating the JWT token.
            // JWT token = payload, sekretkey, security(algorithm, expiresIn)
            const payload = 
              { 
                id: user._id, 
                email: user.email 
              };
              // the token function iteself
              // jwt.sign(payload, secretkey, security)
            const token = jwt.sign(
              { 
                payload: payload
              }, 
              config.SECRETKEY, 
              { 
                algorithm: 'HS512', 
                expiresIn: "20min"
              }
            );
            
            // returns the token when signin is complete
            // the token will be respnded by the server
            return res.json(
              { 
                success: true, 
                token: token 
              }
            );
          }
        );
      } catch (error) {

        console.log(error);
        return res.status(400).json(
          { 
            success: false, 
            message: getErrorMessage(error)
          });
      }
    }
  )(req, res, next);
}