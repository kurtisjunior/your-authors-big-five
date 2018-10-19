const apiRouter = require("express").Router();
const newsRouter = require('../routes/newsRouter');
const testRouter = require('../routes/testRouter');

apiRouter.use('/news', newsRouter);
apiRouter.use('/test', testRouter);

module.exports = apiRouter;
