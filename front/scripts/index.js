// const { fetchMovies } = require('./movie_add.js');
// const { renderCards } = require('./render_cards.js');

// const moviesContainer = document.getElementById("movies-container");

// fetchMovies("https://webpt19b.web.app/data/movies.json")
//   .then(data => renderCards(data, moviesContainer))
//   .catch(() => alert("Error al obtener los datos de las películas."));

// Importar Axios
import axios from 'axios';
import { renderCards } from './render_cards.js';

const moviesContainer = document.getElementById("movies-container");

// Usar Axios en lugar de fetchMovies
axios.get("https://webpt19b.web.app/data/movies.json")
  .then(response => renderCards(response.data, moviesContainer))
  .catch(() => alert("Error al obtener los datos de las películas."));
