
const express = require("express");
const path = require('path');
const session = require("express-session");
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require("mongoose");
const middlewares = require('././middleware/middlewares');

require('dotenv').config();

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Required to rate limits by Client IP
app.enable('trust proxy');

// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));


app.use(session({ secret: "voyagr", resave: true, saveUninitialized: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/newPosts", { useNewUrlParser: true, useUnifiedTopology: true });


// Add routes, both API and view
app.use(routes);
// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);


app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.get("/dashboard", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});