/* Express is a NodeJS module. Require loads (returns) the module (package) and gives access to the exports (access to use what's in the library)
The app variable then calls the express. This puts everything available from express into app. App is now an object of express functionality accessed through its keys. 

Body-parser is middleware. It reads http POST requests from buffer/JSON/string and makes it accessable in req.body. 

app.set (name, value) assigns settings to the app. It configures bahviour on the server. In this case sets up a path to the views folder and ejs file. Express then loads
the page at the views part of the chain (MVC) ---> confirm with Alex 

express.static is a middlewarre function. If there is only one argument then it expects a path. It serves static files from the client side to the server (JS, CSS, images on hard-drive)

*/
const apiRouter = require("./routes/apiRouter");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");

app.use(bodyParser.json());
app.use("/api", apiRouter);
app.use(express.static("public"));

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.use(express.static(path.join(__dirname, "public"))); //  "public" off of current is root

module.exports = app;

/* MVC
First, a request is made by the user and we begin here in the app (server). The request is intepreted then passed over to the api router and then to subsequent routers depending on the request. 
This then ends up at a specific controller. The controller then calls a specific model. The model communicates with a database or API, collects data, manipulates it, and 
then sends it over to the Watson model to run through analysis. Watson analyes the data -> back to the model to resolve -> back to the controller to render -> to the views HTML page ->
displayed to the client. 

*/

// to do:
// write a function that returns the author's id after their name have been entered
// plug result into goodReads model
//design the html page

//build or edit for HTML
