const { getNews } = require('./twitterApi');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

app.use(cors())
app.use('/static', express.static('public'))

app.get('/tweet', (req, res) => {
    getNews()
        .then(response => {
            res.send(response);
        })
        .catch(err => res.send(err));
});

app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`));
