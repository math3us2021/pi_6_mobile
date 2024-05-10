import axios from 'axios';
import { apiKeys } from '../constantes';

const apiBase = 'https://api.themoviedb.org/3';
const trendingMovies = `${apiBase}/trending/movie/day?api_key=${apiKeys}`;
const upcomingMovies = `${apiBase}/movie/upcoming?api_key=${apiKeys}`;
const topRatedMovies = `${apiBase}/top_rated?api_key=${apiKeys}`;

const movieDetails = id=> `${apiBase}/movie/${id}?api_key=${apiKeys}&language=pt-BR`;
const movieCreditis = id=> `${apiBase}/movie/${id}/credits?api_key=${apiKeys}`;
const movieSimilar = id=> `${apiBase}/movie/${id}/similar?api_key=${apiKeys}`;
const movieSearch = `${apiBase}/search/movie?api_key=${apiKeys}`;

export const image500 =path=> path? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 =path=> path? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 =path=> path? `https://image.tmdb.org/t/p/w185${path}` : null;

const apiCall = async (endpoint, param) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: param? param : {},
    };
    try{
        const response = await axios.request(options);
        return response.data;
    }catch (e) {
        console.error(e);
        return {}
    }
}

export const featchTrendingMovies = async () => {
    return await apiCall(trendingMovies)
}

export const featchUpcomingMovies = async () => {
    return await apiCall(upcomingMovies)
}

export const featchTopRatedMovies = async () => {
    return await apiCall(topRatedMovies)
}

export const featchMovieDetails = async (id) => {
    return await apiCall(movieDetails(id))
}

export const featchMovieCredits = async (id) => {
    return await apiCall(movieCreditis(id))
}

export const featchSimilarMovies = async (id) => {
    return await apiCall(movieSimilar(id))
}

export const searchMovies = async (query) => {
    return await apiCall(movieSearch, query)
}