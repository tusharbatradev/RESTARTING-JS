const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://user2000:test1234@cluster0.raq0t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

function connectToDB() {
  console.log('Connecting to MongoDB with URI:', MONGO_URI); 
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.error("Error connecting to db:", err.message);
    });
}

module.exports = connectToDB;
