const homeRouter = require("express").Router();
const { home } = require("../controllers/homePage");

homeRouter.route("/").get(home);

module.exports = homeRouter;
