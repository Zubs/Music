const User = require('../models/User');
const { pick } = require('../utils/helperFunctions');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JwtSecret } = require('../config');
const saltRounds = 10;

// Someone who registered might want to come back
const showLogin = (req, res) => {
  res.render('login');
};

// My favorite part of the site, adding new members
const showRegister = (req, res) => {
  res.render('signup');
};

// Just some checks, the registration is done
const register = async (req, res, next) => {
  req.body = { ...req.body };
  let data = pick(req.body, 'password', 'email');

  // Will need to add validation, you can never be too sure
  let hash = null;
  bcrypt
    .hash(data.password, saltRounds)
    .then((r) => {
      hash = r;
      data.password = hash;
      console.log(hash);
      let user = new User(data);
      user
        .save()
        .then((savedUser) => {
          var token = jwt.sign(
            { _id: user._id, isAdmin: user.isAdmin },
            JwtSecret
          );
          return res.send({
            data: { token },
            message: 'User signup successful',
          }); // This would be changed to render the dashboard
        })
        .catch((err) => {
          return res.status(400).json({ error: 'email exists' }); // This would also return the error to a view
        });
    })
    .catch((err) => {
      next(err);
    });
};

// Know who comes in, be sure they're our friends
const login = (req, res, next) => {
  req.body = { ...req.body };
  let data = pick(req.body, 'password', 'email');
  User.findOne({ email: data.email })
    .then((user) => {
      if (user === null) {
        return res
          .status(400)
          .json({ error: 'Account with the email exist does not exist' }); // These views would come soon
      }
      bcrypt
        .compare(data.password, user.password)
        .then((compare) => {
          if (!compare) {
            return res.status(400).send({ error: 'Incorrect password' }); // This too
          }
          var token = jwt.sign(
            { _id: user._id, isAdmin: user.isAdmin },
            JwtSecret
          );
          return res.send({
            data: { token },
            message: "message: 'User login successful'",
          }); // This would also return dashboard
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};

module.exports = { register, login, showLogin, showRegister };
