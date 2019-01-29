authorInfo = author => {
  //make api get request for author info

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = `https://www.goodreads.com/api/author_url/${author}?key=wqNRtg3IKIgNCbpUsT2GTA`;

  fetch(proxyurl + url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(res => {
      return res.text();
    })
    .then(body => {
      let id = body.match(/id=([^>#]*)/)[0];
      id = id.split("");
      id = id.filter(num => {
        if (num.match(/[0-9]/)) return num;
      });
      id = id.join("");
    })
    .catch(err => console.log("HERE:", err));
  //make watson analysis request
  //render to screen
};

//move controller file into public
