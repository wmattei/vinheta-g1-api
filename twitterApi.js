const Constants = require('./constants');

const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: Constants.CONSUMER_KEY,
    consumer_secret: Constants.CONSUMER_SECRET,
    access_token_key: Constants.ACCESS_TOKEN,
    access_token_secret: Constants.ACCESS_TOKEN_SECRET
});

const getNews = async () => {
    const params = {
        screen_name: Constants.SOURCE_SCREEN_NAME,
        count: 1
    }
    return client
        .get('statuses/user_timeline', params)
        .then(res => {
            return res[0];
        })
};

module.exports = { getNews };
