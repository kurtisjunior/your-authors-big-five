const { newsAnalysisModel } = require('../models/news');
const request = require('superagent');
const { KEY } = require('../config');
const fs = require('fs');

exports.newsAnalysis = (req, res, next) => {
  return request
    .get(`https://newsapi.org/v2/top-headlines?country=${req.query.country}&apiKey=${KEY}`)
    .then(news => newsAnalysisModel(news, req.query.country))
    .then(analysedNews => {
      res.send(analysedNews);
      return analysedNews;
    })
    .then(analysedNews => fs.writeFile(`./data/${req.query.country}-news.json`, JSON.stringify({[req.query.country] : analysedNews}, null, 2), () => console.log('file written sucessfully')))
    .catch(next)
}