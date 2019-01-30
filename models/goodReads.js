const { emotionalAnalysisModel } = require("./watson");

exports.authorAnalysisModel = data => {
  return new Promise((resolve, reject) => {
    let name = data.match(/(<name>(.*)<\/name>)/g)[0];
    name = name.match(/\>(.*?)\</)[1];

    let img = data.match(/(<image_url>(.*)<\/image_url>)/g)[0];
    img = img.match(/\https(.*?)\png/)[0];

    data = data.match(/(<description>(.*)<\/description>)/g);
    data.forEach((description, i, arr) => {
      arr[i] = description.replace(/(<description>)|(<\/description>)/g, "");
    });
    data = {
      content: data,
      name: name,
      image: img,
      contenttype: "text/plain",
      language: "en"
    };

    resolve(emotionalAnalysisModel(JSON.stringify(data)));
  });
};
