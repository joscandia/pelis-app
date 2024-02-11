export interface Moviedetails {
  Title: string;
  Rating: number;
  Director: string;
  Actors: string;
  Poster: string;
}

export const SET_MOVIES = 'SET_MOVIES';
export const SET_MOVIE_DETAIL = 'SET_MOVIE_DETAIL';

export const setMovies = (movies: any[]) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const setMovieDetail = (movieDetail: Moviedetails | undefined) => ({
  type: 'SET_MOVIE_DETAIL',
  payload: movieDetail || {
    Title: '',
    Rating: 0,
    Director: '',
    Actors: '',
    Plot: '',
    Poster: '',
  },
});
