var express = require('express');
var router = express.Router();
let inventoryController = require('../controllers/inventory.controller');

/* GET users listing. */
router.get('/list', inventoryController.inventoryList);


module.exports = router;