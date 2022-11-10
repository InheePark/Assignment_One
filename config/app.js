/*
app.js file for app
inhee park (301162514)
October 21st, 2022
*/

// dependencies (modules) instantiation
// we import modules from node
var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');

// importing modules for auth, login 
// var session = require('express-session');
// var flash = require('connect-flash');
var passport = require('passport');

// instantiating routers
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');

var inventoryRouter = require('../routes/inventory.router');
// instantiating the inventory list routers


var contactsRouter = require('../routes/contacts.router');
// express set up
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app using the passport module
app.use(passport.initialize());

// routers set up
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/inventory', inventoryRouter);
// setting the instantiated routers to a views 

app.use('/contacts', contactsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, "endpoint not found"));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.json({
    success: false, 
    message: err.message
  })
});

// this exports code
// allows this express configuration file
// to be exported
module.exports = app;
