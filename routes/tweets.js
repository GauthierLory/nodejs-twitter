const router = require('express').Router();
const { tweetList, tweetNew, tweetCreate, tweetDelete } = require('../controllers/tweets.controllers');

router.get('/', tweetList);
router.get('/tweet/new', tweetNew);
router.post('/', tweetCreate);
router.delete('/:tweetId', tweetDelete);

module.exports = router;