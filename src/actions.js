import {
  SET_SEARCH_TERM,
  IMAGES_FETCH_REQUESTED,
  IMAGES_FETCH_SUCCEEDED,
  IMAGES_FETCH_FAILED
} from './constants';

export const setSearchTerm = payload => ({
  type: SET_SEARCH_TERM,
  payload
});

export const imagesFetchRequest = searchTerm => ({
  type: IMAGES_FETCH_REQUESTED,
  payload: searchTerm
});

export const imagesFetchSucceeded = payload => ({
  type: IMAGES_FETCH_SUCCEEDED,
  payload
});

export const imagesFetchFailed = payload => ({
  type: IMAGES_FETCH_FAILED,
  payload
});
