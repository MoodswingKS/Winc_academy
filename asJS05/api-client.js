let API_KEY = ''

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
        console.log(data.results.title);
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

// const getMovieName = async () => {
//     const apiUrl = `https://api.themoviedb.org/3/find/${titleName}?external_source=imdb_id&${API_KEY}`

//     try {
//         let res = await fetch(apiURL, { method: "GET"});
//         let data = await res.json();
//         console.log(data);
//         return data;
//     } catch(error) {
//         console.log(error)
//     }
// }