const apiRouter = require("express").Router();
const { insights } = require("../controllers/insights");

apiRouter.get('/', insights);


module.exports = apiRouter;