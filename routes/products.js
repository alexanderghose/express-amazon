var express = require('express');
var router = express.Router();
var productModel = require('../models/products')
var productCtrl = require('../controllers/product')

/* GET products listing. */
router.get('/', productCtrl.index);
router.get('/:id', productCtrl.show)

module.exports = router;