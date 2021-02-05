const router = require('express').Router();
const Chapters = require('../database/models/chapter.model.js');

router.get('/', (req, res) => {
    Chapters.findOne().exec().then(doc => {
        res.json(doc);
    });
})

module.exports = router;