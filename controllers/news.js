const { newsAnalysisModel } = require('../models/news');
const { KEY } = process.env.NODE_ENV === 'production' ? process.env : require('../config');
const request = require('superagent');
const fs = require('fs');

exports.newsAnalysis = (req, res, next) => {
  return request
    .get(`https://newsapi.org/v2/top-headlines?country=${req.query.country}&apiKey=${KEY}`)
    .then(news => newsAnalysisModel(news))
    .then(analysedNews => {
      res.send(analysedNews)
      return analysedNews
    })
    .then(analysedNews => fs.writeFile(`./data/${req.query.country}-news.json`, JSON.stringify({[req.query.country] : analysedNews}, null, 2), () => console.log('file written sucessfully')))
    .catch(next)
}

/*
stage 1: app.js > apiRouter.js > newsRouter > news.js (controller)

stage 2: news.js(controller) > news.js (model) > watson.js (model)

stage 3: watson.js (model) > news.js (model) > news.js(controller)



*/