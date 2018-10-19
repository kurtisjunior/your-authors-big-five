const request = require('superagent')

exports.authorAnalysis = (req, res, next) => {
  console.log('author router operational')

  return request
    .get('https://www.goodreads.com/author/show.xml?key=slEl1SJHVTgMjOwIttW9Gw&id=128382')
    .then(data => {
      
      res.send(data.body+'')
    })
}