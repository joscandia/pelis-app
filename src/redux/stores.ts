// redux/store.ts
import { legacy_createStore as createStore, combineReducers } from 'redux';
import movieReducer from '../redux/reducers/movieReducers';

const rootReducer = combineReducers({
  movies: movieReducer,
});

const store = createStore(rootReducer);

export default store;
