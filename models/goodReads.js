/* 

When our information (data) has been returned from our API:
First, begin a new promise.
Second, maniupulate the data so we only have the info we want. (regex for descriptions only, replace unwanted text)
Third, put the data into a Watson personality insight friendly object so it can be analysed.
Fourth, resolve (finish the promise) by calling the watson service with our data in the correct format. This sends the result back to our controller. 

*/

const { emotionalAnalysisModel } = require("./watson");

exports.authorAnalysisModel = data => {
  return new Promise((resolve, reject) => {
    data = data.match(/(<description>(.*)<\/description>)/g);
    data.forEach((description, i, arr) => {
      arr[i] = description.replace(/(<description>)|(<\/description>)/g, "");
    });
    data = {
      content: data,
      contenttype: "text/plain",
      language: "en"
    };
    //data from the API controller passed over to the watson model for analysis.
    resolve(emotionalAnalysisModel(JSON.stringify(data)));
  });
};
