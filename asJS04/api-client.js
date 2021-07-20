let API_KEY = 'only_on_my_own_pc'

const getData = async () => {
    const apiURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY;

    try {
        let res = await fetch(apiURL, { method: "GET"});
        let data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log(error)
    }
}