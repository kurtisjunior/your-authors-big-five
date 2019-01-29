/*
The watson emotional analysis model (the model other models require to run through their data from their API's)

First, returns a new promise (converts a callback into a promise)
Second, creates a variable per the watson specification with the data (passed in from the other models)
Third, passes this variable (with the data) into a method on the personality insight calles profile as the first argument. A callback is passed in as the second argument. 
Fourth, it is then resolved or rejected. And passed back to the model that invoked it to begin with. 

*/

// const personalityInsights = require("../api/watsonAnalysis");

emotionalAnalysisModel = data => {
  return new Promise((resolve, reject) => {
    const profileParams = {
      content: data,
      content_type: "text/plain",
      consumption_preferences: true,
      raw_scores: true
    };

    personalityInsights.profile(profileParams, (error, profile) => {
      if (error) reject(error);
      else resolve(profile);

      // Promise is resolved when watson returns analysed data, once resolved model sends data to the model it was called in
    });
  });
};
