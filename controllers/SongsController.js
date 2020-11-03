const Song = require('../models/Song');
const { pick } = require('../utils/helperFunctions');

/*

	Here I define functions to be used in my routes for songs related purposes

*/

const uploadSong = (req, res, next) => {
  const songObj = { ...pick(req.body, 'title', 'author') };
  if (!req.files.song || req.files.song.mimetype !== 'audio/mp4') {
    res.send({
      status: 'error',
      message:
        'Error: No song uploaded | song size larger than 10mb | song not a valid type',
    });
  } else if (req.files.song.mimetype === 'audio/mp4') {
    const songFilename = `uploads/${Date.now()}-${req.files.song.name}`;
    req.files.song.mv(songFilename);
    songObj['audio-file'] = songFilename;
  }
  if (req.files.cover && req.files.cover.mimetype === 'image/png') {
    const coverFilename = `uploads/${Date.now()}-${req.files.cover.name}`;
    req.files.song.mv(coverFilename);
    songObj['cover_image'] = coverFilename;
  }
  Song(songObj)
    .then((res) =>
      res.status(200).json({ status: 'success', message: 'new song uploaded' })
    )
    .catch((err) => next(err));

  res.render('songs');
};

// Lists all the songs
const songs = (req, res) => {
  Song.find()
    .then((res) => res.status(200).send({ status: 'success', data: res }))
    .catch((err) => next(err));
  res.render('songs'); // This needs some edits too
};

// Shows details of a particular song, with download link (as expected)
const showSong = (req, res) => {
  Song.findById(req.params.uuid)
    .then((res) => {
      if (res) {
        res.status(200).send({ status: 'success', data: res });
      }
      res.status(404).send({ status: 'error', message: 'Song not found' });
    })
    .catch((err) => next(err));
  res.render('single-song'); // The page also has not been made
};

// Downloads the chosen songs, you can now vibes to it
const download = (req, res) => {
  // This return no page 😅
};

module.exports = { songs, showSong, download, uploadSong };
