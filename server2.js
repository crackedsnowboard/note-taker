// Dependencies
// =============================================================
// var http = require("http");
var fs = require("fs");
var express = require("express");
var path = require("path");
// var routes = require("./routes"); 


notesArray = [];

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

// Sets up the HTML routes
// =============================================================

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

// Sets up the server routes
// =============================================================

app.get("/api/notes", function (req, res) {
    notesArray = JSON.parse(fs.readFileSync('./db/db.json'));
    res.json(notesArray);
})

app.post("/api/notes", function (req, res) {
    newJournal = {
        id: notesArray.length + Math.floor(Math.random()*100),
        title: req.body.title,
        text: req.body.text,
    }
    notesArray.push(newJournal);

    fs.writeFileSync("./db/db.json", JSON.stringify(notesArray), function(errr) {
        if(err) {
            throw err
        }
        res.json(notesArray)
    });
})  

app.delete("/api/notes/:id", function (req, res) {
    var deletedNote = [];
    for (var i = 0; i < notesArray.length; i++) {
        if(notesArray[i].id != req.params.id) {
            deletedNote.push(notesArray[i]);
        }
    }
    notesArray = deletedNote;
    fs.writeFileSync("./db/db.json", JSON.stringify(notesArray), function (err){
        if(err) {
            throw err
        }
        res.json(notesArray);
    })

})



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

