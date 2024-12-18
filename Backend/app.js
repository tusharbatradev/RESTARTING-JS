const express = require("express");
const app = express();
const morgan = require("morgan");

// Use morgan for logging
app.use(morgan("dev"));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json());

// Example middleware (currently commented out)
// app.use((req, res, next) => {
//   console.log("This is Middleware");
//   let a = 2;
//   let b = 3;
//   console.log(a + b);
//   return next();
// });

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
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
