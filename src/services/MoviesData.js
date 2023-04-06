import axios from "axios";

const API_KEY = 'bdc42118597db190ea765e4758333984';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = () => {
    return axios
        .get('/trending/all/day', {
            params: {
                api_key: API_KEY,
            },
        })
        .then((res) => res.data);
}

export const getTrendingMoviesByID = (id) => {
    return axios
        .get('/movie/'+id, {
            params: {
                api_key: API_KEY,
            },
        })
        .then((res) => res.data);
}

export const getTrendingMoviesByName = (name) => {
    return axios
        .get('/search/movie', {
            params: {
                api_key: API_KEY,
                query: name,
            },
        })
        .then((res) => res.data);
}