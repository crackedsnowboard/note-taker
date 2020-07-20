// Dependencies
// =============================================================
var fs = require("fs");
var express = require("express");
var path = require("path");

// Sets up the API routes
// =============================================================
module.exports = function(app) {

    app.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../db/db.json"));
    })
    
    app.post("/api/notes", function (req, res) {
        var reqBody = req.body;
        var notes = fs.readFileSync("./db/db.json");
        reqBody.id = String(notes.length);
        notes = JSON.parse(notes);
        notes.push(reqBody);
        fs.writeFileSync("./db/db.json", JSON.stringify(notes));
        res.json(notes);
    })
        
    app.delete("/api/notes/:id", function (req, res) {
        var noteID = req.params.id
        notes = fs.readFileSync("./db/db.json");
        notes = JSON.parse(notes);
        notes = notes.filter(function(note){
            if(noteID === note.id) {
                return false;
            }
            else {
                return true;
            }
        })
        fs.writeFileSync("./db/db.json", JSON.stringify(notes));
        res.json(notes);
    });
};
