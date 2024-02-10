// components/MovieList.tsx
import React from 'react';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
}

interface MovieListProps {
  movies: Movie[] | undefined;
  onMovieClick: (imdbID: string) => void; 
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieClick }) => {
  if (!movies) {
    return <p>No movies available</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <button
          key={movie.imdbID}
          className="movie-card"
          onClick={() => onMovieClick(movie.imdbID)}
        >
          <h3>{movie.Title}</h3>
          <p>Año: {movie.Year}</p>
        </button>
      ))}
    </div>
  );
};

export default MovieList;
