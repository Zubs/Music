/*

	Here I define functions to be used in my routes for artistes related purposes

*/
const register = (req, res) => {
	res.render('signup');
};

const logout = (req, res) => {
	// Code to logout goes here
};

const login = (req, res) => {
	res.render('login');
};

module.exports = { register, logout, login };
