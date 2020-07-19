// Dependencies
// =============================================================
// var http = require("http");

var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var path = require("path");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// var routes = require("./routes"); 


// notesArray = [];
var db = [];

// Sets up the Express App
// =============================================================



// Sets up the Express app to handle data parsing


// Sets up the HTML routes
// =============================================================



// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/notes.html"));
// })

// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
// })

// Sets up the server routes
// =============================================================

// app.get("/api/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "./db/db.json"));

    // notesArray = JSON.parse(fs.readFileSync('./db/db.json'));
    // res.json(notesArray);
// })

// app.post("/api/notes", function (req, res) {
//     var reqBody = req.body;
//     var notes = fs.readFileSync("./db/db.json");
//     reqBody.id = String(notes.length);
//     notes = JSON.parse(notes);
//     notes.push(reqBody);
//     fs.writeFileSync("./db/db.json", JSON.stringify(notes));
//     res.json(notes);
// })
    
    
    
    
    
    
    
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

// app.delete("/api/notes/:id", function (req, res) {
//     var deletedNote = [];
//     for (var i = 0; i < notesArray.length; i++) {
//         if(notesArray[i].id != req.params.id) {
//             deletedNote.push(notesArray[i]);
//         }
//     }
//     notesArray = deletedNote;
//     fs.writeFileSync("./db/db.json", JSON.stringify(notesArray), function (err){
//         if(err) {
//             throw err
//         }
//         res.json(notesArray);
//     })

// })



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

