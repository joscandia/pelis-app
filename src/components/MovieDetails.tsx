import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

interface Moviedetails {
  Title: string;
  Rating: number;
  Director: string;
  Actors: string;
  Plot: string;
  Poster: string; 
}

interface MovieDetailProps {
  movie: Moviedetails | undefined;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const movieDetail = useSelector((state: any) => state.movies.movieDetail);
  console.log('Movie Details:', movie);
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
    </div>
  );
};

export default MovieDetail;
