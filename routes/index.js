// this folder is where we GET the request 
// similar to creating a request methtod 
// app.get('/')
var express = require('express');
var router = express.Router();

/* 
GET home page. 
GET http request root
// url: http://localhost:3000/
*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // response will be rendering index.ejs of views floder
  // we can change render page to our custom page
});

// we can create different server http requests with different paths
// very mdoular 
router.get('/views/about.ejs', function(req, res, next) {
  res.render('about');
})

module.exports = router;
