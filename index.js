const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://samrankhalil950:M9k8vdtwybpNyhrm@cluster0.v8m0eav.mongodb.net/Education?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("Connected to Mongoose and started listening on port 3000");
    });
  })
  .catch((err) => console.error(err));

// Schema
const degreeSchema = new mongoose.Schema({
  degree: String,
  Scolarships: String,
  degreeId: String,
  field: String,
  university: String,
});

const degree = mongoose.model("Degree", degreeSchema);

// Creating a new user for degree document
const newUser = new degree({
  degree: "Masters",
  Scolarships: "TA,RA",
  degreeId: "purdue-masters-cs",
  field: "Computer Science",
  university: "Purdue University",
});

// Save the document to the collection
newUser
  .save()
  .then((user) => {
    console.log("User saved:", user);
  })
  .catch((error) => {
    console.error("Error saving user:", error);
  });

// Reading all degree documents
degree
  .find()
  .then((fields) => {
    console.log(fields);
  })
  .catch((error) => {
    console.error("Error retrieving data fields", error);
  });

// app.get("/", (req, res) => {
//   res.send("Welcome");
// });
