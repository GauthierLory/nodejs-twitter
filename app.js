const express = require('express');
const morgan = require('morgan');
const path = require('path');
const index = require('./routes');
const errorHandler = require('errorhandler');
require('./database');
const app = express();
const port = process.env.PORT || 3001;

exports.app = app;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

require('./config/session.config');

app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(index);

console.log(process.env.NODE_ENV);


app.listen(port);