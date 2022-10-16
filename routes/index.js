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
  res.render('Home', { title: 'Express' });
  // response will be rendering index.ejs of views floder
  // we can change render page to our custom page
});

// we can create different server http requests with different paths
// very modular 
router.get('/views/about.ejs', function(req, res, next) {
  // the path must be end of the url
  res.render('about');
  // specify the name of the ejs file you want to render
})

router.get('/views/Contact.ejs', function(req, res, next) {
  res.render('Contact');
})

router.get('/views/Projects.ejs', function(req, res, next) {
  res.render('Projects');
})

router.get('/views/Service.ejs', function(req, res, next) {
  res.render('Service');
})

router.get('/views/Inventory.ejs', function(req, res, next) {
  res.render('Inventory');
})
module.exports = router;
