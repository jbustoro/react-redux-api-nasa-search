import * as constants from './constants';

const initialState = {
  searchTerm: '',
  fetchState: '',
  errorMessage: '',
  results: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case constants.IMAGES_FETCH_REQUESTED:
      return { ...state, fetchState: constants.REQUESTED };
    case constants.IMAGES_FETCH_SUCCEEDED:
      return {
        ...state,
        results: action.payload,
        fetchState: constants.SUCCEEDED
      };
    case constants.IMAGES_FETCH_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
        fetchState: constants.FAILED
      };
    default:
      return state;
  }
};

export default rootReducer;
