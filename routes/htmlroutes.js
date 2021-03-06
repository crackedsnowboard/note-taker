// Dependencies
// =============================================================
var express = require("express");
var app = express();
var path = require("path");

// Sets up the HTML routes
// =============================================================

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    })

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
}