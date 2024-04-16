import axios from 'axios';

export function fetchMovies(url) {
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
