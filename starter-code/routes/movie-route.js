const express = require('express');
const router = express.Router();
const Movie = require('../models/movie-model');

/* GET home page for movies */
router.get('/movies', (req, res, next) => {
    res.render('movie-display');
});

module.exports = router;