var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();

var mongoose = require('mongoose');
var CartoonShow = require('../models/CartoonShow.js');

// ----------------- GET ANROP --------------------
router.get('/', function(req, res, next) {
  
  CartoonShow.find( function(err, Cartoons){
    if(err){
      return next(err);
    }
    else{
      res.json(Cartoons);
    }
  });
});

module.exports = router;

// ----------------- POST ANROP --------------------
router.post('/', function(req, res, next){
  
  CartoonShow.create(req.body, function(err, post){
    if(err){
      return next(err);
    }
    else{
      res.json(post);
    }
  });
});

// ----------------- DELETE ANROP --------------------
router.delete('/:id', function(req, res, next){
  CartoonShow.findByIdAndRemove(req.params.id, req.body, function(err, post){
    if(err){
      return next(err);
    }
    else{
      res.json(post);
    }
  });
});

// ----------------- UPDATE ANROP --------------------
router.put('/:id', function(req, res, next){
  CartoonShow.findByIdAndUpdate(req.params.id, req.body, function(err, post){
    if(err){
      return next(err);
    }
    else{
      res.json(post);
    }
  });
});
