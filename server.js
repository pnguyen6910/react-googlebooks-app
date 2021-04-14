const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
const routes = require("./routes");
app.use(routes);

// Connect to the Mongo DB
const url = process.env.MONGODB_URI
mongoose.connect(url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(() => console.log('mongodb connected'))
  .catch(error => console.log('mongodb connection', error));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});