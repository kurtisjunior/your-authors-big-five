var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const { VERSION, USERNAME, PASSWORD, URL } = require('../config');

var personalityInsights = new PersonalityInsightsV3({
    version: VERSION,
    username: USERNAME,
    password: PASSWORD,
    url: URL
});

module.exports = personalityInsights;



//require in personalityV3 from installed watson module
//create an instance of the class which takes an argument of authentification credentials. Connected to watson. 
//Then we can access the methods, one of which is the .profile. 
//We then want to invoke in our controllers and the information we get back we send

