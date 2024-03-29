import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Typography,
  CircularProgress,
  Grid,
  CardMedia,
} from '@mui/material';
import { green } from '@mui/material/colors';
import { fetchMovieById } from '../services/api';
import '../css/movielist.css'
const color = green[600];

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Director: string;
  Actors: string;
  Country: string;
  Ratings: { Source: string; Value: string }[];
  Poster: string;
  imdbRating: string;
  Plot: String;
}

interface MovieListProps {
  movies: Movie[] | undefined;
  onMovieClick: (imdbID: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieClick }) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showMovies, setShowMovies] = useState(false);

  useEffect(() => {
    setShowMovies(!!movies && movies.length > 0);
  }, [movies]);

  const handleDetailsClick = async (imdbID: string) => {
    onMovieClick(imdbID);
    setLoading(true);

    try {
      const movieDetails = await fetchMovieById(imdbID);
      console.log('Movie Details:', movieDetails);

    
      const imdbRating = movieDetails.imdbRating !== undefined ? movieDetails.imdbRating : 'N/A';

      const movieWithRating = { ...movieDetails, imdbRating: movieDetails.imdbRating || 'N/A' };
      setSelectedMovie(movieWithRating);
    } catch (error) {
      console.error('Error fetching movie details:', error);
      // Manejar el error, posiblemente mostrar un mensaje al usuario
    } finally {
      setLoading(false);
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {showMovies &&
        movies?.map((movie) => (
          <Grid item key={movie.imdbID}>
            <Card className="movie-card" onClick={() => handleDetailsClick(movie.imdbID)}>
              <CardMedia component="img" height="200" image={movie.Poster} alt={movie.Title} />
              <CardContent>
                <Typography variant="h6" component="div">
                  {movie.Title}
                </Typography>
                <Typography color="textSecondary">
                  Año: {movie.Year}
                </Typography>
                <Typography color="textSecondary" >
               
                </Typography>
                <Button variant="contained" style={{ backgroundColor: color }}>
                  Detalles
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogContent>
          {loading ? (
            <CircularProgress />
          ) : (
            selectedMovie && (
              <div>
                <h2>{selectedMovie.Title}</h2>
                <p>Director: {selectedMovie.Director}</p>
                <p>Actors: {selectedMovie.Actors}</p>
                <p>Descripcion: {selectedMovie.Plot}</p>
                <p>Pais de origen : {selectedMovie.Country}</p>
                <p>Rating: {selectedMovie.imdbRating}</p>
                <img src={selectedMovie.Poster} alt={selectedMovie.Title} style={{ maxWidth: '100%' }} />
              </div>
            )
          )}
          <Button onClick={handleCloseModal}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default MovieList;
