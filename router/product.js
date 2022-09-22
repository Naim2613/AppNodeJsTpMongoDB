const express = require('express');
const router = express.Router();
const ProdCtrl = require('../controlers/product')

router.post('/', ProdCtrl.createProduct)

module.exports = router; 