// authorReviews = id => {
//   const proxyurl = "https://cors-anywhere.herokuapp.com/";
//   const url =
//     "https://www.goodreads.com/author/show.xml?key=slEl1SJHVTgMjOwIttW9Gw&id=903";

//   fetch(proxyurl + url, {
//     method: "GET",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     }
//   })
//     .then(res => {
//       return res.text();
//     })
//     .then(body => {
//       let description = body.match(/(<description>(.*)<\/description>)/g);
//       description.forEach((description, i, arr) => {
//         arr[i] = description.replace(/(<description>)|(<\/description>)/g, "");
//       });
//       description = {
//         content: description,
//         contenttype: "text/plain",
//         language: "en"
//       };
//       emotionalAnalysisModel(description);
//     });
// };
