import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import '../css/movielist.css'
const color = green[600];

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
    <div className="movie-list-container">
      {movies.map((movie) => (
        <Card key={movie.imdbID} className="movie-card" onClick={() => onMovieClick(movie.imdbID)}>
          <CardContent>
            <Typography variant="h6" component="div">
              {movie.Title}
            </Typography>
            <Typography color="textSecondary">
              Año: {movie.Year}
            </Typography>
            <Button variant="contained" style={{ backgroundColor: color }}>
              Detalles
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MovieList;
