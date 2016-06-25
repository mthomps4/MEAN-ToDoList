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
router.put('/todos/:id', function(req, res){
  var id = req.params.id;
  var todo = req.body;
  if(todo && todo._id !== id){
    return res.status(500).json({err: "Ids don't match!"});
  }
  Todo.findByIdAndUpdate(id, todo, {new:true}, function(err, todo){ //New option says "yes" we want to save the new data
    if(err){
      return res.status(500).json({err: err.message});
    }
    res.json({'todo': todo, message: "Todo Updated"});
  });
});

// ADD DELETE ROUTE TO REMOVE POSTS
router.delete('/todos/:id', function (req, res) {
    var todoId = req.params.id; // This maps to the :id in the url
    Todo.findByIdAndRemove(todoId, function (err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json({ message: 'Deleted Todo' });
        }
    });
});

module.exports = router;
