var express = require('express');
var router = express.Router();
var productModel = require('../models/products')

function index(req, res, next) {
    res.render('products/index', {
        products: productModel.getAll()
  });
}

function show(req, res, next){
    res.render('products/show', {
        product: productModel.getId(req.params.id)
    })
}

  module.exports = {
      index,
      show
  }