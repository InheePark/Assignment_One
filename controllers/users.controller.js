/*
auth, login controller for app
Inhee Park (301162514)
October 21st, 2022
*/

let User = require('../models/user');
let passport = require('passport');

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

// controller for signup view
module.exports.renderSignup = function(req, res, next){
  // if the session is empty (no user in session)
  // passport session
    if(!req.user) {
        let newUser = User();

        res.render('auth/signup', {
            title: 'Sign-up Form', 
            messages: req.flash('error'), 
            user: newUser
        });
    }else{
        return res.redirect('/');
    }
};

// controller for singin vew
module.exports.renderSignin = function(req, res, next) {
  if (!req.user) {
    res.render('auth/signin', {
      title: 'Sign-in Form',
      messages: req.flash('error') || req.flash('info')
    });
  } else {
    console.log(req.user);
    return res.redirect('/');
  }
};

// signup function for signup view
// process signup logic
module.exports.signup = function(req, res, next) {
    if (!req.user && req.body.password === req.body.password_confirm) {
      console.log(req.body);
  
      let user = new User(req.body); 
      // the values posted from the signup form 
      // req.body = request view body values
      user.provider = 'local'; // local sesion
      console.log(user);
  
      // error handling 
      user.save((err) => {
        if (err) {
          let message = getErrorMessage(err);
  
          req.flash('error', message);
          // return res.redirect('/users/signup');
          return res.render('auth/signup', {
            title: 'Sign-up Form',
            messages: req.flash('error'),
            user: user
          });
        }
        req.login(user, (err) => {
          if (err) return next(err);
          return res.redirect('/');
        });
      });
    }
    else {
      return res.redirect('/');
    }
};
 
// function for signout view
module.exports.signout = function(req, res, next) {
    req.logout(function(err) {
      if(err){return next(err);}
      res.redirect('/');
    });
};
  
// function for signin view
module.exports.signin = function(req, res, next){
    passport.authenticate('local', {   
      successRedirect: req.session.url || '/',
      failureRedirect: '/users/signin',
      failureFlash: true
    })(req, res, next);
    delete req.session.url;
}