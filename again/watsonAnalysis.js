/*
Require in personalityV3 from the installed watson module
Require senstivie information (tokens) from the config file. Important because config is hidden but the tokens are needed to use the watson service. 

The tokens are required from the process.env global object (heroku). If the process.env.NODE_ENV key has a value of 'production' then get tokens from process.env (global)
Otherwise, get the tokens from the client side and available config file (not available when exported)


Create an instance of personalityV3 class with authentification credentials from the account with Watson. 
*/

//Do the credentials need process.env.NODE_ENV ? At the minute its the value of the whole global object

// const PersonalityInsightsV3 = require("watson-developer-cloud/personality-insights/v3");

const { VERSION, USERNAME, PASSWORD, URL } =
  process.env.NODE_ENV === "production" ? process.env : require("../config");

var personalityInsights = new PersonalityInsightsV3({
  version: VERSION,
  username: USERNAME,
  password: PASSWORD,
  url: URL
});

module.exports = personalityInsights;
