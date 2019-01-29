const goodReadsRouter = require("express").Router();

// goodReadsRouter.route("/").get(authorAnalysis);

goodReadsRouter.get("/", (req, res) => {
  res.render("rateYourAuthor.html");
});

module.exports = goodReadsRouter;
