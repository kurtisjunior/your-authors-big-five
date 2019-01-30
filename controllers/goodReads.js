const request = require("superagent");
const { authorAnalysisModel } = require("../models/goodReads");

exports.authorAnalysis = (req, res, next) => {
  console.log("author router operational");
  const author = req.query.author;
  return request
    .get(
      `https://www.goodreads.com/api/author_url/${author}?key=wqNRtg3IKIgNCbpUsT2GTA`
    )
    .then(res => {
      return res.body.toString();
    })
    .then(body => {
      let id = body.match(/id=([^>#]*)/)[0];
      id = id.split("");
      id = id.filter(num => {
        if (num.match(/[0-9]/)) return num;
      });
      id = id.join("");
      return request
        .get(
          `https://www.goodreads.com/author/show.xml?key=slEl1SJHVTgMjOwIttW9Gw&id=${id}`
        )
        .then(data => {
          return authorAnalysisModel(data.body + "");
        })
        .then(watsonData => {
          const result = [watsonData.personality[1], watsonData.personality[4]];
          res.render("goodReads.ejs", { result });
        });
    });
};

// return request
//   .get(
//     "https://www.goodreads.com/author/show.xml?key=slEl1SJHVTgMjOwIttW9Gw&id=128382"
//   )
//   .then(data => {
//     //needs to be returned
//     return authorAnalysisModel(data.body + "");
//   })
//   .then(watsonData => {
//     const result = [watsonData.personality[1], watsonData.personality[4]];

//     // //render to ejs
//     // res.render('goodReads', { result }, (err, renderedGoodReads) => {
//     // // });

//     res.render("goodReads.ejs", { result });

//     // res.send(result);
//   });
