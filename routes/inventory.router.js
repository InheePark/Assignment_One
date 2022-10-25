/*
router for inventory views
Inhee Park (301162514)
October 21, 2022
*/

var express = require('express');
var router = express.Router();
let inventoryController = require('../controllers/inventory.controller');

/* GET users listing. */
router.get('/list', inventoryController.inventoryList);

// Routers for edit
router.get('/edit/:id', inventoryController.displayEditPage);
// router for edit views
router.post('/edit/:id', inventoryController.processEditPage);
// router for controller logic for edit


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', inventoryController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', inventoryController.processAddPage);


// Route for Delete
router.get('/delete/:id', inventoryController.performDelete);

module.exports = router;