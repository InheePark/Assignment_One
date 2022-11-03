/*
router for business contacts views
Inhee Park (301162514)
October 21, 2022
*/

var express = require('express');
var router = express.Router();
let contactsController = require('../controllers/contacts.controller');

// function for authenticating
function requireAuth(req, res, next){
    if(!req.isAuthenticated()){
        // req.isAuthenticated -> checks if session is authenticated
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

/* GET business contacts listing. */
router.get('/list', requireAuth, contactsController.contactsList);

// Routers for edit
router.get('/edit/:id', requireAuth, contactsController.displayEditPage);
router.post('/edit/:id', requireAuth, contactsController.processEditPage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, contactsController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, contactsController.processAddPage);


// Route for Delete
router.get('/delete/:id', requireAuth, contactsController.performDelete);

module.exports = router;