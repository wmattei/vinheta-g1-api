require('dotenv').config()

const options = {
    CONSUMER_KEY: process.env.CONSUMER_KEY,
    CONSUMER_SECRET: process.env.CONSUMER_SECRET,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    SOURCE_SCREEN_NAME: process.env.SOURCE_SCREEN_NAME
} 
module.exports = options;
