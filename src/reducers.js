import { SHOW_RESULTS, SET_SEARCH_TERM } from './actions';

const initialState = {
  searchTerm: '',
  results: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM: {
      return { ...state, searchTerm: action.payload };
    }
    case SHOW_RESULTS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
