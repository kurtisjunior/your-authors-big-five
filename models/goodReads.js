const { emotionalAnalysisModel } = require("./watson")

exports.authorAnalysisModel = (data) => {
    return new Promise((resolve, reject) => {
        data = data.match(/(<description>(.*)<\/description>)/g)
        data.forEach((description, i, arr) => {
            arr[i] = description.replace(/(<description>)|(<\/description>)/g, '')
        })
        data = {
            content: data,
            contenttype: 'text/plain',
            language: 'en'
        }
        resolve(emotionalAnalysisModel(JSON.stringify(data)));
    })
}