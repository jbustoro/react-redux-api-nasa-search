export const fetchResults = searchTerm => {
  return fetch(
    `https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image`
  )
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};
