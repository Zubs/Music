const jwt = require('jsonwebtoken');
const { JwtSecret } = require('../config');
const User = require('../models/User');

module.exports = (req, res, next) => {
  const token = req.headers['xmusic-auth-token'];
  console.log(token);
  try {
    const decoded = jwt.verify(token, JwtSecret);
    const user = User.findById(decoded.id);
    if (!user) {
      return res.status(403).json({ error: 'invalid token' });
    }
    req.user = decoded;
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Expired Token' });
    }
    logger(error);
    return res.status(401).json({ error: 'Unauthorized' });
  }
  return next();
};
