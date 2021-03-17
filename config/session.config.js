const { app } = require('../app');
require('dotenv').config()
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const mongoose = require('mongoose');

app.use(session({
    secret: 'je suis un secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24 * 14
    },
    store: MongoStore.create({
        mongoUrl: process.env.URLMongo,
        ttl: 60 *60 * 24 * 14
    })
}));