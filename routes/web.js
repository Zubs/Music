const express = require('express');
const router = express.Router();

const { index, about, contact } = require('../controllers/PagesController');
const { register, login } = require('../controllers/UserController');
const { songs, showSong, download } = require('../controllers/SongsController');

router.get('/', index);

router.get('/about', about);

router.get('/contact', contact);

router.get('/login', login);

router.get('/register', register);

router.get('/songs', songs);

router.get('/songs/:title', showSong);

router.get('/songs/:title/download', download);

module.exports = router;
