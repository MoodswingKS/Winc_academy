let API_KEY = 'd91278cf7c9296e03ab8074d4b8d80c5'

const getGenres = async () => {
    const apiURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

    try {
        let res = await fetch(apiURL, { method: "GET"});
        let data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log(error)
    }
}

const bestScifi = async () => {
    const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878&sort_by=vote_average.desc&vote_count.gte=10`;
    
    try {
        let res = await fetch(apiURL, { method: "GET"});
        let data = await res.json();
        const titles = data.results.map(item => item.title);
        console.log(titles);
        return data;
    } catch(error) {
        console.log(error)
    }
}

const bestDrama = async () => {
    const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18&sort_by=vote_average.desc&vote_count.gte=10`;
    
    try {
        let res = await fetch(apiURL, { method: "GET"});
        let data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log(error)
    }
}

const getMovieName = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/tt0460740?external_source=imdb_id&api_key=${API_KEY}`;

    try {
        let res = await fetch(apiUrl, { method: "GET"});
        let data = await res.json();
        console.log(data);
        const titles = data.title;
        favoriteMovie(titles);
        return data;
    } catch(error) {
        console.log(error)
    }
}