import { Record } from 'immutable';
import * as constants from './constants';

const initialState = Record({
  searchTerm: '',
  fetchState: '',
  errorMessage: '',
  results: []
});

const defaultState = new initialState();

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_SEARCH_TERM:
      return state.set('searchTerm', action.payload);
    case constants.IMAGES_FETCH_REQUESTED:
      return state.set('fetchState', constants.REQUESTED);
    case constants.IMAGES_FETCH_SUCCEEDED:
      return state
        .set('results', action.payload)
        .set('fetchState', constants.SUCCEEDED);
    case constants.IMAGES_FETCH_FAILED:
      return state
        .set('errorMessage', action.payload)
        .set('fetchState', constants.FAILED);
    default:
      return state;
  }
};

export default rootReducer;
