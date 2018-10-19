const  { emotionalAnalysisModel } = require('../models/watson');

exports.newsAnalysisModel = (news) => {
  return new Promise((resolve, reject) => {
    let parsedNews = JSON.parse(news.text).articles;
    parsedNews = parsedNews.reduce((acc, value) => {
      acc.push({
        content : value.content,
        contenttype: 'application/json',
        language: 'en'
      })
      return acc
    }, [])
    resolve(emotionalAnalysisModel(JSON.stringify(parsedNews)))
  })
}
