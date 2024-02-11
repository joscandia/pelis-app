import axios from "axios";
const apiKey = 'c2711e0b'; 

const api = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params: {
    apiKey,
  },
});
console.log('funciona la api')
export const fetchMovies = async (title: string, year: string) => {
  const response = await api.get('', { params: { s: title, y: year } });
  return response.data.Search;
};
export const fetchMovieById = async (imdbID: string) => {
  const response = await api.get('', { params: { i: imdbID, plot: 'full' } });
  return response.data;
};