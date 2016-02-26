var express = require('express');

// Makes an instance of express
var app = express();

// Port express listens on for request
var port = 8000;

// Route Example
app.get('/', function(req, res){
    res.send("hello world");
});

//Route example
app.get('/books', function(req, res){
    res.send("hello books");
});

// express is running here
app.listen(port, function(err) {
    console.log( "Server started on port: " + port);
});
