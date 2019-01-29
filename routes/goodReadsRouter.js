const goodReadsRouter = require("express").Router();
const { authorAnalysis } = require("../controllers/goodReads");

goodReadsRouter.route("/").get(authorAnalysis);

module.exports = goodReadsRouter;
