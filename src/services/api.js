import axios from "axios";

const api = axios.create({
    baseURL: `https://api.themoviedb.org/3/discover/movie?api_key=296befabd945b90aaa21cf57acc96d15`
});

export default api; 