// importo express
const express = require('express')
const router = express.Router();

// importo l'array dei post
const posts = require("../data/posts");

// index
router.get('/', function (req, res) {
    res.json(posts)
});

// show
router.get('/:id', function (req, res) {    
    res.json(posts[req.params.id])
});

// store
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});

// esporto router
module.exports = router;