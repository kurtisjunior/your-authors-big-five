const request = require('superagent');
const { KEY } = require('../config')
const fs = require('fs');
const {insights} = require('./insights');

exports.getNews = (req, res, next) => {
  return request
    .get(`https://newsapi.org/v2/top-headlines?country=${req.query.country}&apiKey=${KEY}`)
    .then(news => {
      let parsedNews = JSON.parse(news.text).articles;

      parsedNews = parsedNews.reduce((acc, value, i, arr) => {
        acc.push({
          content : value.content,
          contenttype: 'text/plain',
          created: Date.now(),
          id: `${i}`,
          language: 'en'
        })
        return acc
      }, [])
      fs.writeFile('./todaysNews.json', JSON.stringify(parsedNews), () => {
        console.log('written')
      })
    })
}

let x = {
"content": 'a',
"contenttype": "text/plain",
"created": 1447639154000,
"id": "666073008692314113",
"language": "en"
}