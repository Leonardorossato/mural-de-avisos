const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const Posts = require('../model/Posts');
const cors = require('cors');

const options = {
    origin: "http://localhost:5000"
}

router.use(cors(options));

app.use(bodyParser.json());

router.get('/all', (req, res) => {
    res.json(JSON.stringify(Posts.getAll()));
});

router.post('/new', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    Posts.NewPost(title, description);
    res.send('Post Adicionado com Sucesso');
});

module.exports = router;