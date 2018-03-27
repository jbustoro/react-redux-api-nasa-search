export const fetchResults = searchTerm => {
  const url = `https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};
