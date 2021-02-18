const router = require('express').Router();
const { tweetList, tweetNew, tweetCreate, tweetDelete, tweetEdit, tweetUpdate } = require('../controllers/tweets.controllers');

router.get('/', tweetList);
router.get('/new', tweetNew);
router.post('/', tweetCreate);
router.get('/edit/:tweetId', tweetEdit)
router.post('/update/:tweetId', tweetUpdate);
router.delete('/:tweetId', tweetDelete);

module.exports = router;