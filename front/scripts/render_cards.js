export function renderCards(movies, container) {
    movies.forEach(movie => {
      const card = createMovieCard(movie);
      container.appendChild(card);
    });
  }
  
  function createMovieCard(movie) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.innerHTML = movie.title;
  
    const year = createParagraph("Year: " + movie.year);
    const director = createParagraph("Director: " + movie.director);
    const duration = createParagraph("Duration: " + movie.duration);
    const genre = createParagraph("Genre: " + movie.genre.join(', '));
    const rate = createParagraph("Rate: " + movie.rate);
  
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
  
    return card;
  }
  
  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.classList.add("card-text");
    paragraph.innerHTML = text;
    return paragraph;
  }
  