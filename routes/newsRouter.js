const newsRouter = require('express').Router();
const { getNews } = require('../controllers/news')

newsRouter.route('/').get(getNews)

module.exports = newsRouter;