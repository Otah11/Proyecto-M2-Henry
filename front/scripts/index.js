import { fetchMovies } from './movie_add.js';
import { renderCards } from './render_cards.js';

const moviesContainer = document.getElementById("movies-container");

// Realizamos la solicitud GET al servidor externo utilizando Axios
fetchMovies("https://webpt19b.web.app/data/movies.json")
  .then(movies => {
    renderCards(movies, moviesContainer);
  })
  .catch(error => {
    console.error("Error al obtener los datos de las películas:", error);
    alert("Error al obtener los datos de las películas.");
  });
