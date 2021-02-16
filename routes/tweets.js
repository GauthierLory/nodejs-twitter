const router = require('express').Router();
const Tweet = require('../database/models/tweet.model');
const { tweetList, tweetNew, tweetCreated } = require('../controllers/tweets.controllers');

router.get('/', tweetList);
router.get('/tweet/new', tweetNew);
router.post('/', tweetCreate);

module.exports = router;