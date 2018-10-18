const personalityInsights = require('../api/watson')
const fs = require('fs');

exports.insights = (req, res, next) => {
    const profileParams = {
        content: require('../profile.json'),
        'content_type': 'application/json',
        'consumption_preferences': true,
        'raw_scores': true
    };

    personalityInsights.profile(profileParams, (error, profile) => {
        if (error) res.send(error)
        else {
            res.send(JSON.stringify(profile, null, 2))
            fs.writeFile('./profileAnalysed.json', JSON.stringify(profile, null, 2), () => {
                console.log('file written');
            })
        }
    })
}