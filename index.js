const { getNews } = require('./twitterApi');

const express = require('express');
const app = express();
const port = 3000;

app.get('/tweet', (req, res) => {
    getNews()
        .then(response => {
            res.send(response);
        })
        .catch(err => res.send(err));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
