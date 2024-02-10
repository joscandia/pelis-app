// components/MovieDetail.tsx
import React from 'react';

interface MovieDetailProps {
  movie: any;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>Rating: {movie.Rating}</p>
      <p>{movie.Plot}</p>
      <p>Director: {movie.Director}</p>
      <p>Actors: {movie.Actors}</p>
      {/* Otros detalles que consideres convenientes */}
    </div>
  );
};

export default MovieDetail;
