const express = require("express");
const session = require("express-session");
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
// const passportlocal =  require("passport-local").Strategy;
// const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

require('dotenv').config();
const posts = require('./api/posts');

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Required to rate limits by Client IP
app.enable('trust proxy');
// Mongoose connect 
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'The World Is Your Oyster!',
  });
});

app.use('/api/posts', posts);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(session({ secret: "voyagr", resave: true, saveUninitialized: true }));

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userposts", { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.PORT || 1337;
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});