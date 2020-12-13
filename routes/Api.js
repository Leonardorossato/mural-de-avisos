const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Posts = require('../model/Posts');
const app = express();

app.use(bodyParser.json());

app.get('/all', (req, res) => {
    res.json(JSON.stringify(Posts.getAll()));
});

app.post('/new', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    Posts.newPost( title, description);
    res.send('Post Adicionado com Sucesso');
});

module.exports = router;