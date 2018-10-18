const apiRouter = require("express").Router();
const newsRouter = require('../routes/newsRouter');
const { insights } = require("../controllers/insights");

apiRouter.route('/').get(insights);

apiRouter.use('/news', newsRouter);


module.exports = apiRouter;