'use strict';

var express = require('express');
var Todo = require('../models/todo');
// var todos = require('../../public/mock/todos.json');
var router = express.Router();

router.get('/todos', function(req, res){
  Todo.find({}, function(err, todos){
    if(err){
      //do something
      return res.status(500).json({message: err.message});
    }else{
      res.json({todos:todos});
    }

  });
});

// ADD POST ROUTE FOR NEW POSTS
router.post('/todos', function(req, res){
  var todo = req.body;
  Todo.create(todo, function(err, todo){
    if(err){
      return res.status(500).json({err: err.message});
    }
    res.json({'todo': todo, message: "Todo Created"});

  });
});

// ADD PUT ROUTE TO UPDATE EXISTING POSTS
// ADD DELETE ROUTE TO REMOVE POSTS

module.exports = router;
