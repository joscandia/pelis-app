// pages/MovieListPage.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../services/api';
import { setMovies } from '../redux/actions/movieActions';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

const MovieListPage: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movies.movies);

  const searchMovies = async (title: string, year: string) => {
    const data = await fetchMovies(title, year);
    dispatch(setMovies(data));
  };

  useEffect(() => {
    searchMovies('', ''); // Puedes inicializar con valores predeterminados o dejar en blanco
  }, []);

  return (
    <div>
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MovieListPage;
