/*

	Here I define functions to be used in my routes for general purpose pages like index, about and contact

*/

// Landing page
const index = (req, res) => {
	res.render('index');
};

// About page
const about = (req, res) => {
	res.render('about'); // This page needs to be made
};

// Contact page. Or what's the use of a site where people can't talk to us 😏
const contact = (req, res) => {
	res.render('contact');
};

// It won't make sense if we don't respond to their opinions
const saveContact = (req, res) => {

	// We either mail to us, or store in db

	// Return page for them to know we got their message
};

module.exports = { index, about, contact, saveContact };
