const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(
      "mongodb+srv://tusharbatra08:2jOlUc36IlFmkPO7@cluster0.raq0t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("Connected to db");
    });
}

module.exports = connectToDB;
