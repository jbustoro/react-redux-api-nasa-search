export const fetchResults = query => {
  return fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};
