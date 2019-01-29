const express = require("express");
const app = express();
const apiRouter = require("./routes/apiRouter");
const bodyParser = require("body-parser");

app.set("veiw engine", "ejs");
app.use(bodyParser.json());

app.use(express.static("public"));
app.use("/api", apiRouter);

module.exports = app;

//render a search page
//take input and feed into watson
//render to the rate your authro page

//two page app.
