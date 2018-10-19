const newsRouter = require('express').Router();
const { newsAnalysis } = require('../controllers/news')

newsRouter.route('/').get(newsAnalysis)

module.exports = newsRouter;
