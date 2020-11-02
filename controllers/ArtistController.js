/*

	This contains functions to be used in my routes for artists purposes

*/

// Displays the profile with all of an artist's songs
const artist = (req, res) => {
	res.render('artist');
};

module.exports = { artist };
