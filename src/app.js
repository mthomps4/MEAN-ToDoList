'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('public')); //Middleware Serves static files from /public folder

app.listen(3000, function(){
  console.log("The server is running on port 3000.")
});
