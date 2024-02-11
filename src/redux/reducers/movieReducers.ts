import { Moviedetails, SET_MOVIES, SET_MOVIE_DETAIL } from '../actions/movieActions';

interface MovieState {
  movies: any[] | null; // Ajuste aquí
  movieDetail: any | null;
}
const initialState = {
  movieDetail: {
    Title: '',
    Rating: 0,
    Director: '',
    Actors: '',
    Poster: '',
  },
};

const moviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    case SET_MOVIE_DETAIL:
      return { ...state, movieDetail: action.payload };
    default:
      return state;
  }
};
export default moviesReducer;