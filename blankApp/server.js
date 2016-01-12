var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride= require('method-override');
var mongoose = require('mongoose');

var db = require('./config/db');

var port = process.env.PORT || 8080;

mongoose.connect('mongodb://master:66original@ds039135.mongolab.com:39135/ryeker-practice');

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(bodyParser.urlencoded( {extended: true} ));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname+'/public'));

require('./app/routes')(app);

app.listen(port);

exports = module.exports = app;

