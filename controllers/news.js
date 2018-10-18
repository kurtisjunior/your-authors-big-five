const  { emotionAnalysis } = require('./watson');
const request = require('superagent');
const { KEY } = require('../config');
const fs = require('fs');

exports.getNews = (req, res, next) => {
  return request
    .get(`https://newsapi.org/v2/top-headlines?country=${req.query.country}&apiKey=${KEY}`)
    .then(news => {
      let parsedNews = JSON.parse(news.text).articles;

      parsedNews = parsedNews.reduce((acc, value, i, arr) => {
        acc.push({
          content : value.content,
          contenttype: 'application/json',
          language: 'en'
        })
        return acc
      }, [])
      fs.writeFile('./todaysNews.json', JSON.stringify(parsedNews), () => {
        console.log('written')
        emotionAnalysis(JSON.stringify({news : parsedNews}));
      })
    })
}

let x = {
"content": 'a',
"contenttype": "text/plain",
"language": "en"
}