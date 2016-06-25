'use strict';

var Todo = require('./models/todo.js');

var todos = [
  '<<BLANK TASK>>'
];

todos.forEach(function(todo, index){
  Todo.find({'name': todo}, function(err, todos){
    if (!err && !todos.length) {
      Todo.create({completed:false, name:todo});
    };
  });
});
