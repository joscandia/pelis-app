// redux/reducers/movieReducer.ts
import { SET_MOVIES, SET_MOVIE_DETAIL } from '../actions/movieActions';

interface MovieState {
  movies: any[];
  movieDetail: any | null;
}

const initialState: MovieState = {
  movies: [],
  movieDetail: null,
};

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    case SET_MOVIE_DETAIL:
      return { ...state, movieDetail: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
