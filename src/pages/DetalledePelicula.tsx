// pages/MovieDetailPage.tsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieDetail } from '../redux/actions/movieActions';
import MovieDetail from '../components/MovieDetails';
import { fetchMovieById } from '../services/api';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const movieDetail = useSelector((state: any) => state.movies.movieDetail);
  const loadMovieDetail = async () => {
    try {
      if (!id) {
        console.error('ID is undefined');
        return;
      }
  
      const data = await fetchMovieById(id);
      console.log('Movie Detail Data:', data);
      dispatch(setMovieDetail(data));
    } catch (error) {
      console.error('Error fetching movie detail:', error);
    }
  };
  

  useEffect(() => {
    loadMovieDetail();
  }, [id]);

  return (
    <div>
      <MovieDetail movie={movieDetail} />
    </div>
  );
};

export default MovieDetailPage;
