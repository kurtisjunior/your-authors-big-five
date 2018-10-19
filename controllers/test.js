const {emotionalAnalysisModel} = require('../models/watson');
const testProfile = require('../profile.json')
const fs = require('fs');

exports.test = (req, res, next) => {
  emotionalAnalysisModel(JSON.stringify(testProfile))
  .then(data => {
    res.send(data);
    return data
  })
  .then(data => fs.writeFile(`./data/test-analysis.json`, JSON.stringify({test : data}, null, 2), () => console.log('file written sucessfully')))
  .catch(next)
}