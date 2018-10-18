const personalityInsights = require('../api/watson')


exports.insights = (req, res, next) => {
    const profileParams = {
        content: require('../profile.json'),
        'content_type': 'application/json',
        'consumption_preferences': true,
        'raw_scores': true
    };

    personalityInsights.profile(profileParams, (error, profile) => {
        if (error) res.send(error)
        else res.send({ profile })
    })




}