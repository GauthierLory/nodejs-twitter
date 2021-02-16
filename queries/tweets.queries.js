const Tweet = require('../database/models/tweet.model');

exports.getTweets = () => {
    return Tweet.find({}).exec();
}

exports.createTweet = () => {
    const newTweet = new Tweet(tweet);
    return newTweet.save();
}