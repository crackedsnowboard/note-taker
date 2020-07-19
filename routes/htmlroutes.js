var fs = require("fs");
var express = require("express");
var path = require("path");
var app = express();

var db = []


// Sets up the HTML routes
// =============================================================

module.exports = function (app) {

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    })

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
}