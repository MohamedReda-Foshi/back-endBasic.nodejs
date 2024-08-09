const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 5000;
const Customer = require("./models/articleSchema");

app.use(express.static("public"));
// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Connect to MongoDB and start the server
mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("err to database");
  });
//send input to database
app.use(express.urlencoded({ extended: true }));

// Define Home page

app.get("/user/add.html", (req, res) => {
  res.render("user/add");
});

//post request

app.post("/user/add.html", (req, res) => {
  console.log(req.body);

  Customer.create(req.body)
    .then((data) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log("err");
    });
});

// get data from the database

app.get("/", (req, res) => {
  Customer.find()
    .then((resulte) => {
      console.log(resulte)
      res.render("index",{arr:resulte});
    })
    .catch((err) => {
      console.log(err);
    });
});

//Delete request
