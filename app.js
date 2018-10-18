const express = require("express");
const app = express();
const apiRouter = require('./routes/apiRouter');

const bodyParser = require("body-parser");
app.use(bodyParser.json());



//routers
app.use('/api', apiRouter);


module.exports = app;