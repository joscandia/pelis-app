import React from 'react';

interface Movielist {
  Title: string;
  Rating: number;
  Director: string;
  Actors: string;
  Plot: string; // Agrega Plot si también es una propiedad de las películas
  Poster: string; // Agrega Poster si también es una propiedad de las películas
}

interface MovieDetailProps {
  movie: Movielist | undefined; // Cambia a un solo objeto Movielist en lugar de un arreglo
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
  if (!movie) {
    return <div>No se encontró la película.</div>;
  }

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
