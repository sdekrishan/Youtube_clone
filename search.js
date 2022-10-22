let getdata = JSON.parse(localStorage.getItem("maindata"));

let display = (data) => {
  document.getElementById("container").innerHTML = "";
  data.forEach(
    ({
      snippet: title,
      snippet: {
        thumbnails: { medium },
      },
      id: { videoId },
    }) => {
      let div = document.createElement("div");
      div.setAttribute("id", "div");

      let frame = document.createElement("img");

      frame.src = medium.url;

      let our = document.createElement("h2");

      our.innerText = title.title;

      div.append(frame, our);

      document.getElementById("container").append(div);

      console.log(data);

      // put a event listener so that whenever user clicks that it would take it to another page i.e. vdo.html

      div.addEventListener("click", () => {
        window.location.href = "vdo.html";
        let obj = {
          name: title.title,
          iframe: videoId,
        };
        localStorage.setItem("vdo", JSON.stringify(obj));
      });
    }
    
  );
};

display(getdata);
