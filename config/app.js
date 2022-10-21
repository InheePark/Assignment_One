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
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// importing modules for auth, login 
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');

// instantiating routers
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var inventoryRouter = require('../routes/inventory.router');
var contactsRouter = require('../routes/contacts.router');
// express set up
var app = express();

app.use(session({
  saveUninitialized: true, 
  resave: true, 
  secret: "sessionSecret"
}));

// view engine setup
// ejs = a javascript file that converts to html 
app.set('views', path.join(__dirname, '../views')); 
// we are setting the views to the path specified
app.set('view engine', 'ejs'); // the view engine is set to ejs

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

// app using the passport module
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// routers set up
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inventory', inventoryRouter);
app.use('/contacts', contactsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// this exports code
// allows this express configuration file
// to be exported
module.exports = app;
