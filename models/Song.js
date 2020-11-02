const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
	title: {
		type: String,
	},
	cover_image: String,	// I don't know how to store images.
	audio_file: String,		// I don't know how to store audio too.
	user_id: String,		// For model relations. 🤲
}, { timestamps: true });

const songs = mongoose.model('songs', songSchema);

module.exports = songs;
