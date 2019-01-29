const { emotionalAnalysisModel } = require("./watson");

exports.authorAnalysisModel = data => {
  return new Promise((resolve, reject) => {
    const name = data.match(/(<name>(.*)<\/name>)/g)[0];
    const img = data.match(/(<image_url>(.*)<\/image_url>)/g)[0];

    data = data.match(/(<description>(.*)<\/description>)/g);
    data.forEach((description, i, arr) => {
      arr[i] = description.replace(/(<description>)|(<\/description>)/g, "");
    });
    data = {
      content: data,
      contenttype: "text/plain",
      language: "en"
    };
    resolve(emotionalAnalysisModel(JSON.stringify(data)));
  });
};
