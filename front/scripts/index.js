import axios from 'axios';
import { renderCards } from './render_cards.js';

const moviesContainer = document.getElementById("movies-container");


axios.get("https://webpt19b.web.app/data/movies.json")
  .then(response => renderCards(response.data, moviesContainer))
  .catch(() => alert("Error al obtener los datos de las películas."));
