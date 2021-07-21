getGenres();
bestScifi();
bestDrama();
getMovieName();

const favoriteMovie = (titles) => {
let newMovie = document.createElement("h1");
newMovie.innerHTML = `${titles}`;

document.body.appendChild(newMovie);
}