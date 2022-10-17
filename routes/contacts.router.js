var express = require('express');
var router = express.Router();
let contactsController = require('../controllers/contacts.controller');

/* GET users listing. */
router.get('/list', contactsController.contactsList);

// Routers for edit
router.get('/edit/:id', contactsController.displayEditPage);
router.post('/edit/:id', contactsController.processEditPage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', contactsController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', contactsController.processAddPage);


// Route for Delete
router.get('/delete/:id', contactsController.performDelete);

module.exports = router;