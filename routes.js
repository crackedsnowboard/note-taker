// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// var route = require("express").Router();
var app = express();

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/db.json", function (req, res) {
  res.sendFile(path.join(__dirname, "db.json"));
});


module.exports = route