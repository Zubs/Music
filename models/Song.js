const mongoose = require('mongoose');

const songSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    cover_image: String, // I don't know how to store images.
    audio_file: String, // I don't know how to store audio too.
    user_id: String, // For model relations. 🤲
    artist: {
      type: mongoose.Types.ObjectId,
      ref: 'Artist',
    },
  },
  { timestamps: true }
);

const songs = mongoose.model('Song', songSchema);

module.exports = songs;
