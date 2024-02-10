// components/MovieList.tsx
import React from 'react';
//import { Link } from 'react-router-dom';

interface Movie {
    Title: string;
    Year: string;
    imdbID: string; 
    // Add more properties as needed
  }

  interface MovieListProps {
    movies: Movie[] | undefined;
  }
  
  const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    // Check if movies is defined before using map
    if (!movies) {
      return <p>No movies available</p>;
    }
  
    return (
      <div>
        {movies.map((movie) => (
          // Your mapping logic here
          <div key={movie.imdbID}>
            {/* Display movie details */}
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    );
  };
  
  export default MovieList;