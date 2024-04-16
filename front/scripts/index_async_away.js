const moviesContainer = document.getElementById("movies-container");

async function obtenerPeliculas() {
  try {
    const response = await axios.get("https://webpt19b.web.app/data/movies.json");
    // Una vez que obtenemos la respuesta, iteramos sobre los datos recibidos
    response.data.forEach(movie => {
      const card = document.createElement("div");
      card.classList.add("card");

      const title = document.createElement("h3");
      title.classList.add("card-title");
      title.innerHTML = movie.title;

      const year = document.createElement("p");
      year.classList.add("card-text");
      year.innerHTML = "Year: " + movie.year;

      const director = document.createElement("p");
      director.classList.add("card-text");
      director.innerHTML = "Director: " + movie.director;

      const duration = document.createElement("p");
      duration.classList.add("card-text");
      duration.innerHTML = "Duration: " + movie.duration;

      const genre = document.createElement("p");
      genre.classList.add("card-text");
      genre.innerHTML = "Genre: " + movie.genre.join(', ');

      const rate = document.createElement("p");
      rate.classList.add("card-text");
      rate.innerHTML = "Rate: " + movie.rate;

      const poster = document.createElement("img");
      poster.classList.add("card-image");
      poster.src = movie.poster;

      card.appendChild(poster);
      card.appendChild(title);
      card.appendChild(year);
      card.appendChild(director);
      card.appendChild(duration);
      card.appendChild(genre);
      card.appendChild(rate);

      moviesContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error al obtener los datos de las películas:", error);
    alert("Error al obtener los datos de las películas.");
  }
}

obtenerPeliculas();
