const request = require('superagent');
const { KEY } = require('../config')
const fs = require('fs');

exports.getNews = (req, res, next) => {
  return request
    .get(`https://newsapi.org/v2/top-headlines?country=${req.query.country}&apiKey=${KEY}`)
    .then(news => {
      fs.writeFile('./todaysNews.json', JSON.stringify(news, null, 2), () => {
        console.log('written file success')
      })
    })
}