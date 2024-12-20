const express = require("express");
const morgan = require("morgan");
const userModel = require("./models/user");
const connectToDB = require("./config/db");

const app = express();

// Connect to the database
connectToDB();

// Use morgan for logging
app.use(morgan("dev"));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json());
app.use(express.static("public"));

app.get(
  "/",
  (req, res, next) => {
    const a = 5;
    const b = 2;
    console.log(a + b);
    next();
  },
  (req, res) => {
    res.render("index");
  }
);

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

app.get("/profile", (req, res) => {
  res.send("This is Profile Page");
});

app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
