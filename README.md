# Note Taker

I am builiding a note taker application that will help save thoughts that occure during the day for later use. 

## User Story
AS A user, I want to be able to write and save notes
I WANT to be able to delete notes I've written before
SO THAT I can organize my thoughts and keep track of tasks I need to complete


## Installation
I used node.js, express and heroku to deploy the app. 

Check out inquirer [Inquirer](https://www.npmjs.com/package/inquirer)
File Service [Express](http://expressjs.com/)
Heroku [Heroku](https://www.heroku.com/)


A few key code snippets that helped to build the program:

Using the require to enable my route scripts located in separate folder
```
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
```

Using a module exports to render the collected information to our json file. 
```
module.exports = function(app) {

    app.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../db/db.json"));
    })
    
```


### Link to deployed Team Profile generator
[Note-Taker](https://frozen-inlet-33341.herokuapp.com/)

#### GIF of Applicaton

![App](https://media.giphy.com/media/f4VgzDL5VfcgfIwBnE/giphy.gif)


#### Author Links
[LinkedIn](linkedin.com/in/joel-mathen/) <br>
[GitHub](https://github.com/crackedsnowboard)



