var fs = require("fs");
var express = require("express");
var path = require("path");
var app = express();

var db = []



// Sets up the API routes
// =============================================================

module.exports = function(app) {

    app.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../db/db.json"));
    
        // app.get("/api/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "./db/db.json"));

    // notesArray = JSON.parse(fs.readFileSync('./db/db.json'));
    // res.json(notesArray);
// })
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
        
        
        
        
        
        
        
        // newJournal = {
        //     id: notesArray.length + Math.floor(Math.random()*100),
        //     title: req.body.title,
        //     text: req.body.text,
        // }
        // notesArray.push(newJournal);
    
        // fs.writeFileSync("./db/db.json", JSON.stringify(notesArray), function(errr) {
        //     if(err) {
        //         throw err
        //     }
        //     res.json(notesArray)
    //     });
    // })  
    
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
        
//         var deletedNote = [];
//         for (var i = 0; i < db.length; i++) {
//             if(db[i].id != req.params.id) {
//                 deletedNote.push(notesArray[i]);
//             }
//         }
//         notesArray = deletedNote;
//         fs.writeFileSync("./db/db.json", JSON.stringify(notesArray), function (err){
//             if(err) {
//                 throw err
//             }
//             res.json(notesArray);
//         })
    
//     })
// }
