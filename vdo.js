// get data from local storage

let arr = JSON.parse(localStorage.getItem("vdo"));

//fuction for appending data into body and to show data in ourpage

let display = (data) => {
  let div = document.createElement("div");

  div.setAttribute("id", "data");

  let url = data.iframe;

  let frame = document.createElement("iframe");

  frame.width = "700px";

  frame.height = "350px";

  frame.src = `https://www.youtube.com/embed/${url}`;

  let our = document.createElement("h1");

  our.innerText = data.name;

  console.log(url);
  div.append(frame, our);

  document.querySelector("body").append(div);
};

display(arr);
