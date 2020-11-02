// Import packages
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dbURI = require('./config/db.js');
const { createError } = require('http');
const routes = require('./routes/web.js');

// Initiate the app
const app = express();

// Link to mongoDB atlas
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('Connected to DB and listening for requests on PORT 3000');
  })
  .catch((err) => console.log(err));

// Register view engine
app.set('view engine', 'ejs');

// Set Up static files
app.use(express.static('public'));

// Using morgan to log
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', userRoutes);
app.use('/', routes);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: 'error',
    message: err.message,
  });
});

app.listen(3000);
