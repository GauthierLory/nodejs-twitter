const router = require('express').Router();
const { tweetList, tweetNew, tweetCreate } = require('../controllers/tweets.controllers');

router.get('/', tweetList);
router.get('/tweet/new', tweetNew);
router.post('/', tweetCreate);

module.exports = router;