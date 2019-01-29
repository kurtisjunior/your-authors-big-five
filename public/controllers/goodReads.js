/* Superagent is a client side request library. It handles the requests made to external API's. 

PROMISES -> We must return the request we have made to the URL to begin the promise chain when working with API's. 
.then with whatever we get back (an object of information) invoke the data with authorAnalysisModel, which is a model. 

.then with the result of our data invoked with watson's super computer, maniupulate the result to access the info we want 
to display to our user in the views

Then render (serve) this information to our ejs HTML page to display it to the client. 
Takes a string path to the file to render, and an object of data to render 

*/

const request = require("superagent");
const { authorAnalysisModel } = require("../models/goodReads");

exports.authorAnalysis = (req, res, next) => {
  console.log("author router operational");
  //turn into  a promise
  return request
    .get(
      "https://www.goodreads.com/author/show.xml?key=slEl1SJHVTgMjOwIttW9Gw&id=903"
    )
    .then(data => {
      //needs to be returned because we want the result back to continue the chain
      return authorAnalysisModel(data.body + "");
    })
    .then(watsonData => {
      const result = [watsonData.personality[1], watsonData.personality[4]];
      console.log(result);
      res.render("goodReads.ejs", { result });
    });
};

/* 

Developer key
key: wqNRtg3IKIgNCbpUsT2GTA
secret: aCuUISqadGTlYCVu0AyYpu5MMncheDdp9xTmcw1wHI

To do:
I. Get the get request working and see what comes back
II. may need to make another request with the result
III. Make a config file and add the key, import variable. (will need to add this to heroku)
IV. Add search to page take input and make request
X. Render result below the search

*/
