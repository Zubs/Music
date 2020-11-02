const dotenv = require('dotenv');
dotenv.config();

const { DB_URL, JwtSecret } = process.env;

module.exports = {
  DB_URL,
  JwtSecret,
};
