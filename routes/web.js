const express = require('express');
const router = express.Router();

const {
  index,
  about,
  contact,
  saveContact,
} = require('../controllers/PagesController');
const { showLogin, showRegister } = require('../controllers/UserController');
const {
  songs,
  showSong,
  download,
  uploadSong,
} = require('../controllers/SongsController');
const { artist } = require('../controllers/ArtistController');

router.get('/', index);

router.get('/about', about);

router.get('/contact', contact);

router.post('/contact', saveContact);

router.get('/login', showLogin);

router.get('/register', showRegister);

// songs

router.post('/songs', uploadSong);

router.get('/songs', songs);

router.get('/songs/:uuid', showSong);

router.get('/songs/:uuid/download', download);

router.get('/artist/:uuid', artist);

module.exports = router;
