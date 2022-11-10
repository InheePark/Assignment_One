/*
router for inventory views
Inhee Park (301162514)
October 21, 2022
*/

var express = require('express');
var router = express.Router();
let inventoryController = require('../controllers/inventory.controller');

function requireAuth(req, res, next){
    if(!req.isAuthenticated()){
        // req.isAuthenticated -> checks if session is authenticated
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

/* GET users listing. */
router.get('/list', inventoryController.inventoryList);


// router for edit views
router.put('/edit/:id', inventoryController.processEdit);
// router for controller logic for edit

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', inventoryController.processAdd);


// Route for Delete
router.delete('/delete/:id', inventoryController.performDelete);

module.exports = router;