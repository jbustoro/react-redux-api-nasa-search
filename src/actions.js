import axios from 'axios';

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SHOW_RESULTS = 'SHOW_RESULTS';

export function setSearchTerm(payload) {
  return {
    type: SET_SEARCH_TERM,
    payload
  };
}

export function showResults(searchTerm) {
  return (dispatch, getState) => {
    axios
      .get(
        `https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image`
      )
      .then(response => {
        dispatch({
          type: SHOW_RESULTS,
          payload: response.data.collection.items
        });
        console.log(response.data.collection.items);
      });
  };
}
