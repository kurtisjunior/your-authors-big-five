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

app.set("veiw engine", "ejs");
app.use(bodyParser.json());

app.use("/api", apiRouter);
app.use(express.static("public"));

module.exports = app;

//render a search page
//take input and feed into watson
//render to the rate your authro page

//two page app.
