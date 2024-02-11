import React, { useState } from 'react';
import { Button, Card, CardContent, Dialog, DialogContent, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import '../css/movielist.css';

const color = green[600];

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Director: string;
  Actors: string;
  Poster: string;
  Plot: String;
}

interface MovieListProps {
  movies: Movie[] | undefined;
  onMovieClick: (imdbID: string) => void;
}



const MovieList: React.FC<MovieListProps> = ({ movies, onMovieClick }) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleDetailsClick = (imdbID: string) => {
    onMovieClick(imdbID);
    const selected = movies?.find((movie) => movie.imdbID === imdbID) || null;
    setSelectedMovie(selected);
    setOpenModal(true);
  };
  

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="movie-list-container">
      {movies?.map((movie) => (
        <Card key={movie.imdbID} className="movie-card" onClick={() => handleDetailsClick(movie.imdbID)}>
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

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogContent>
          {selectedMovie && (
            <div>
                
              <h2>{selectedMovie.Title}</h2>
              <p>Director: {selectedMovie.Director}</p>
              <p>Actors: {selectedMovie.Actors}</p>
              <p>Plot: {selectedMovie.Plot}</p>
              <img src={selectedMovie.Poster} alt={selectedMovie.Title} style={{ maxWidth: '100%' }} />

            </div>
          )}
          <Button onClick={handleCloseModal}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
  {console.log(selectedMovie)}
};

export default MovieList;
