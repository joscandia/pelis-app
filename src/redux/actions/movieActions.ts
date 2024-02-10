// redux/actions/movieActions.ts
export const SET_MOVIES = 'SET_MOVIES';
export const SET_MOVIE_DETAIL = 'SET_MOVIE_DETAIL';

export const setMovies = (movies: any[]) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const setMovieDetail = (movieDetail: any) => ({
  type: SET_MOVIE_DETAIL,
  payload: movieDetail,
});
