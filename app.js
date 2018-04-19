var express = require('express');
var path = require('path');
var menu = require('./routes/menu');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
require('dotenv').config();
var app = express();

// connect statement to the database
mongoose.connect(`mongodb://${process.env.DB_User}:${process.env.DB_PWD}@cluster0-shard-00-00-pj7zg.mongodb.net:27017,cluster0-shard-00-01-pj7zg.mongodb.net:27017,cluster0-shard-00-02-pj7zg.mongodb.net:27017/CSCIE31?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`);
//setup middleware
app.use(bodyparser.urlencoded({extended: false}));

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/static', express.static(path.join(__dirname, './public')));

app.use('/menu', menu);

app.use((req, res, next)=>{
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
