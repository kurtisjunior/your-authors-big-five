const apiRouter = require("express").Router();
const newsRouter = require('../routes/newsRouter');
const testRouter = require('../routes/testRouter');
const goodReadsRouter = require('../routes/goodReadsRouter')

apiRouter.use('/news', newsRouter);
apiRouter.use('/test', testRouter);
apiRouter.use('/goodReads', goodReadsRouter);
module.exports = apiRouter;
