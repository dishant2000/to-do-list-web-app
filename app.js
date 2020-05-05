const express = require('express');
const todoController = require('./controller/todoController');
const bodyParser = require('body-parser');
var app = express();
app.set('view engine','ejs');

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: false }));

todoController(app);


app.listen(3000);
console.log("Listening to pert 3000");
