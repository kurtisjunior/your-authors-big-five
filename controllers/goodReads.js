const request = require('superagent')
const { authorAnalysisModel } = require('../models/goodReads')

exports.authorAnalysis = (req, res, next) => {
  console.log('author router operational')

  return request
    .get('https://www.goodreads.com/author/show.xml?key=slEl1SJHVTgMjOwIttW9Gw&id=128382')
    .then(data => {
      //needs to be returned
      return authorAnalysisModel(data.body + '');
    })
    .then(watsonData => {
      const result = [watsonData.personality[1], watsonData.personality[4]];

      // //render to ejs
      // res.render('goodReads', { result }, (err, renderedGoodReads) => {
      // // });



      res.render('goodReads.ejs', { result });

      // res.send(result);
    })
}