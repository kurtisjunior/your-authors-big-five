const newsRouter = require('express').Router();
const { getNews } = require('../controllers/newsController')

newsRouter.route('/').get(getNews)

module.exports = newsRouter;