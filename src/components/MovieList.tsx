// components/MovieList.tsx
import React from 'react';
//import '../css/movielist.css'
import { Button, Card, CardContent, Typography } from '@mui/material';
import { green } from '@mui/material/colors';

const color = green [600];

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140vh', flexDirection: 'column' }}>
    {movies.map((movie) => (
      <Card key={movie.imdbID} style={{ margin: '10px', width: '200px' }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {movie.Title}
          </Typography>
          <Typography color="textSecondary">
            Año: {movie.Year}
          </Typography>
          <Button  onClick={() => onMovieClick(movie.imdbID)} variant="contained" color="success">
            Detalles
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
);
};
export default MovieList;
