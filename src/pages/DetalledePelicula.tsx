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
  console.log('Movie Detail from Store:', movieDetail);
  
  useEffect(() => {
    const loadMovieDetail = async () => {
      try {
        if (!id) {
          console.error('ID is undefined');
          return;
        }

        const data = await fetchMovieById(id);
        dispatch(setMovieDetail(data));
      } catch (error) {
        console.error('Error fetching movie detail:', error);
      }
    };

    loadMovieDetail();
  }, [id, dispatch]);

  return (
    <div>
      <MovieDetail movie={movieDetail} />
    </div>
  );
};

export default MovieDetailPage;
