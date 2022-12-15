/* Setup env for API keys */
const dotenv = require("dotenv");
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
const projectData = {};
// Require Express to run server and routes
const bodyParser = require("body-parser");
// Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("dist"));
// app.use("/dist", express.static("./dist/"));

// POST method route
app.post("/api", (req, res) => {
  projectData["date"] = req.body.date;
  projectData["city"] = req.body.city;
  projectData["temp"] = req.body.temp;
  projectData["weather_icon"] = req.body.weather_icon;
  projectData["weather_des"] = req.body.weather_des;
  projectData["photo"] = req.body.photo;
  res.send(projectData);
});

// GET method route
app.get("/", (req, res) => {
  // res.send(projectData);
  res.sendFile("dist/index.html");
});

// Setup Server
const port = 5000;
app.listen(port, () => {
  console.log(`running on localhost: ${port} ...`);
});

module.exports = app;
