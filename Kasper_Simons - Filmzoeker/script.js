const totalMovies = document.querySelector("li");
const radioItems = document.querySelectorAll(".filters");

// create new arrays
const latestMovie = movies.filter(l => {
  let movieYear = parseInt(l.Year);
  if (movieYear >= 2014) { return l }
});

const avengersMovie = movies.filter(av => {
  if (av.Title.includes("Avenger")) { return av }
});

const xmenMovie = movies.filter(xm => {
  if (xm.Title.includes("X-Men")) { return xm }
});

const princessMovie = movies.filter(pr => {
  if (pr.Title.includes("Princess")) { return pr }
});

const batmanMovie = movies.filter(bm => {
  if (bm.Title.includes("Batman")) { return bm }
});

// create list with everything
movies.forEach(movie => {
  let newMovie = document.createElement("li");
  let linkMovie = document.createElement("a");
  let imgMovie = document.createElement("img");

  linkMovie.setAttribute("target", "_blank");
  linkMovie.href = "http://www.imdb.com/title/" + movie.imdbID;
  imgMovie.src = movie.Poster;
  newMovie.classList.add("filmgrid");

  linkMovie.appendChild(imgMovie);
  newMovie.appendChild(linkMovie);
  document.getElementById("movies-list").appendChild(newMovie);
})

// radio buttons event listeners
radioItems.forEach(button => button.addEventListener("change", e => {
  const radioItem = e.target;
  const genreItem = radioItem.id;
  renewList();
  checkFilter(genreItem);
}))

// reset list
const renewList = () => {
  const allMovies = document.getElementById("movies-list");
  allMovies.querySelectorAll('*').forEach(n => n.remove());
}

// switch to connect radio with filtered list
const checkFilter = (genreItem) => {
  switch (genreItem) {
    case "release": {
      let filterList = latestMovie;
      filterMovies(filterList);
      break;
    }
    case "avengers": {
      let filterList = avengersMovie;
      filterMovies(filterList);
      break;
    }
    case "x-men": {
      let filterList = xmenMovie;
      filterMovies(filterList);
      break;
    }
    case "princess": {
      let filterList = princessMovie;
      filterMovies(filterList);
      break;
    }
    case "batman": {
      let filterList = batmanMovie;
      filterMovies(filterList);
      break;
    }
  }
}

// create filtered list
const filterMovies = (filterList) => {
  filterList.forEach(f => {
    let newMovie = document.createElement("li");
    let linkMovie = document.createElement("a");
    let imgMovie = document.createElement("img");
    linkMovie.setAttribute("target", "_blank");
    linkMovie.href = "http://www.imdb.com/title/" + f.imdbID;

    imgMovie.src = f.Poster;

    newMovie.classList.add("filmgrid");
    linkMovie.appendChild(imgMovie);
    newMovie.appendChild(linkMovie);
    document.getElementById("movies-list").appendChild(newMovie);
  });
}