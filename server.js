// Dependencies
// =============================================================

// Sets up the Express App
// =============================================================
var express = require("express");
var app = express();

// Sets up the Express app to handle data parsing
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

// For API and HTML routes. See respective scripts in routes folder
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

