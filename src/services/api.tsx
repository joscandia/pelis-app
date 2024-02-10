import axios from "axios";
const apiKey = 'c2711e0b'; // Replace with your actual API key obtained from http://www.omdbapi.com/

const api = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params: {
    apiKey,
  },
});

export const fetchMovies = async (title: string, year: string) => {
  const response = await api.get('', { params: { s: title, y: year } });
  return response.data.Search;
};
export const fetchMovieById = async (imdbID: string) => {
    const response = await api.get('', { params: { i: imdbID } });
    return response.data;
  };