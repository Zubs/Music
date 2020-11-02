/*

	Here I define functions to be used in my routes for songs related purposes

*/

// Lists all the songs
const songs = (req, res) => {
	res.render('songs'); // This needs some edits too
};

// Shows details of a particular song, with download link (as expected)
const showSong = (req, res) => {
	res.render('single-song'); // The page also has not been made 
};

// Downloads the chosen songs, you can now vibes to it
const download = (req, res) => {
	
	// This return no page 😅
};

module.exports = { songs, showSong, download };
