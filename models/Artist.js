const mongoose = require('mongoose');

const songSchema = mongoose.Schema({});

const songs = mongoose.model('Artist', songSchema);

module.exports = songs;
