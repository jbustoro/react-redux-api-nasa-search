import {
  SET_SEARCH_TERM,
  IMAGES_FETCH_REQUESTED,
  IMAGES_FETCH_SUCCEEDED,
  IMAGES_FETCH_FAILED,
  REQUESTED,
  SUCCEEDED,
  FAILED
} from './constants';

const initialState = {
  searchTerm: '',
  fetchState: '',
  errorMessage: '',
  results: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case IMAGES_FETCH_REQUESTED:
      return { ...state, fetchState: REQUESTED };
    case IMAGES_FETCH_SUCCEEDED:
      return { ...state, results: action.payload, fetchState: SUCCEEDED };
    case IMAGES_FETCH_FAILED:
      return { ...state, errorMessage: action.payload, fetchState: FAILED };
    default:
      return state;
  }
};

export default rootReducer;
