const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const api = require('./routes/api');
const index = require('./routes')
require('./database');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(index);

app.listen(port);