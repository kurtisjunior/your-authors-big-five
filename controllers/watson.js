const personalityInsights = require('../api/watson')

const fs = require('fs');

exports.emotionAnalysis = (req, res, next) => {

  const profileParams = {
    'content': JSON.parse(req),
    'content_type': 'text/plain',
    'consumption_preferences': true,
    'raw_scores': true
  };

  personalityInsights.profile(profileParams, (error, profile) => {
    // if (error) res.send(error)
    // else {
    //   // console.log(JSON.parse(req))
    //   res.send(JSON.stringify(profile, null, 2))
    console.log(profile);
      fs.writeFile(`./${Date.now()}.json`, JSON.stringify(profile, null, 2), () => {
        console.log('file written');
      })
    // }

    

  })
}

exports.emotionAnalysis0 = (data, callback) => {
  const profileParams = {
    'content': JSON.parse(data),
    'content_type': 'application/json',
    'consumption_preferences': true,
    'raw_scores': true
  }

  personalityInsights.profile(profileParams, callback)
}