const key = "f8b6944";
let movieNameref = document.getElementById("movie-name");
let search1 = document.getElementById("search");
let result = document.getElementById("result");

let getMovie = () => {
  let movieName = movieNameref.value;
  let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class = "msg">lease Enter A Movie Name<h3>`
  }
  else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.Response == "True") {
          result.innerHTML = `
      <div class = "info">
        <img src = ${data.Poster} class = "poster">
        <div>
        <h2> ${data.Title}</h2>
        <div  class = "rating">
        ⭐ <h4> ${data.imdbRating}</h4>
        </div>
        <div class = "details">
        <h4> ${data.Rated} </h4>
        <h4> ${data.Year} </h4>
        <h4> ${data.Runtime} </h4>
        </div>
        <div class = "genre">
        <div>${data.Genre.split(",").join("</div><div>")}</div>
        </div>
        </div>
        </div>
        <h2> Plot: </h2>
        <p>${data.Plot}</p>
        <h2> Cast: </h2>
        <p>${data.Actors}</p>
        
      
      `
        }
        else {
          result.innerHTML = `<h3 class = "msg">${data.Error}<h3>`;
        }
      })
      .catch(() => {
        result.innerHTML = `<h3 class = "msg">Error Occured</h3>`;
        console.log(data)
      });
  }
};
search1.addEventListener("click", getMovie);