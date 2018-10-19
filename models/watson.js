const personalityInsights = require('../api/watson')

exports.emotionalAnalysisModel = (data) => {
  return new Promise((resolve, reject) => {
    const profileParams = {
      'content': data,
      'content_type': 'text/plain',
      'consumption_preferences': true,
      'raw_scores': true
    }
    personalityInsights.profile(profileParams, (error, profile) => {
      if (error) reject(error)
      else resolve(profile)
    })
  }) 
}
