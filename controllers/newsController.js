const NewsAPI = require('newsapi');
const fs = require('fs')
// const { KEY } = require('../config/index');

exports.getNews = (req, res, next) => {
  // console.log(KEY);
  const newsapi = new NewsAPI(`ee70235faab2499e868c7212921593e9`)

  newsapi.v2.topHeadlines({
    sources: 'bbc-news',

  }).then(res => {
    fs.writeFile('./news.json', JSON.stringify(res, null, 2), () => {
      console.log('news file written');
    })
  });
}