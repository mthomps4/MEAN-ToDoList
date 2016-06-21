'use strict';

var express = require('express');
var todos = require('../../public/mock/todos.json');
var router = express.Router();

router.get('/todos', function(req, res){
  res.json({todos:todos});
});

// ADD POST ROUTE FOR NEW POSTS
// ADD PUT ROUTE TO UPDATE EXISTING POSTS
// ADD DELETE ROUTE TO REMOVE POSTS

module.exports = router;
