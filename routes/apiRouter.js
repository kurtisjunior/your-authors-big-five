const apiRouter = require("express").Router();
const testRouter = require("../routes/testRouter");
const homeRouter = require("../routes/homeRouter");
const goodReadsRouter = require("../routes/goodReadsRouter");

apiRouter.use("/test", testRouter);
apiRouter.use("/authorHome", homeRouter);
apiRouter.use("/authorResult", goodReadsRouter);

module.exports = apiRouter;
