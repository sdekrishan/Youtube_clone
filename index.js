let api = "AIzaSyDybOgS_CQT3Y7YeIDv5CqarVuafToGjZs";

//for fetching the api of home vdos
let homedata = async () => {
  try {
    let bes = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${api}&maxResults=20`
    );

    let { items } = await bes.json();

    let ouritem = items;
    console.log(ouritem);
    display(ouritem);
  } catch (err) {
    console.log(err);
  }
};

homedata();

// for appending data into home page

function display(data) {
  document.getElementById("search_results").innerHTML = "";

  data.forEach(
    ({
      snippet: title,
      snippet: {
        thumbnails: { medium },
      },
      id: { videoId },
      snippet: { channelTitle },
      snippet: { channelId },
    }) => {
      let div = document.createElement("div");

      let frame = document.createElement("img");

      frame.src = medium.url;

      let our = document.createElement("p");

      our.innerText = title.title;

      let cn = document.createElement("p");
      cn.innerText = channelTitle;

      div.append(frame, our, cn);

      document.getElementById("search_results").append(div);

      div.addEventListener(
        "click",
        () => {
          window.location.href = "vdo.html";
          let obj = {
            name: title.title,
            iframe: videoId,
          };
          localStorage.setItem("vdo", JSON.stringify(obj));
        }

        
      );
    }
  );
}
// for fetching the Api we use async await

let getdata = async () => {
  try {
    let query = document.getElementById("query").value;
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${api}&part=snippet&maxResults=20`
    );
    let { items } = await res.json();

    let arr_of_vdo = items;

    //whenever we click on search we go to our search result page
    window.location.href = "search.html";

    // set data in ls so that we can access our data in search.js
    localStorage.setItem("maindata", JSON.stringify(arr_of_vdo));
    console.log(arr_of_vdo);
  } catch (err) {
    console.log(err);
  }
};
