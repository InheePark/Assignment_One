#!/usr/bin/env node

/**
 * Module dependencies.
 */
var dbConfig = require('./config/db');
// using the db connection and instantiating to the server

var app = require('./config/app');

// variable for initiazling passport file
// var passportConfig = require('./config/passport');
var passportConfig = require('./config/local');

var debug = require('debug')('assignmentone:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */
var db = dbConfig();
// we use the dbConfig file
// the dbCongif uses ./cofig/db 
// and uses the exportable function inside the file 

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 * need a http module object for http request (http)
 * need an app object to request of (app)
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 * listen on the server object created
 */
let passport = passportConfig();
// registering passport file configuration 
server.listen(port);
server.on('error', onError); // error handling, will trigger onError function
server.on('listening', onListening); // when requesting, onListening function trigger

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log(`${app} listening to http://localhost:${port}`);
}
