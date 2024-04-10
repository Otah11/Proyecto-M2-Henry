document.addEventListener('DOMContentLoaded', function() {
    const filmsSection = document.getElementById('films');
  
    tempData.forEach(movie => {
      const movieElement = document.createElement('article');
      movieElement.classList.add('movie');
  
      const posterImage = document.createElement('img');
      posterImage.src = movie.poster;
      posterImage.alt = movie.title;
  
      const movieInfo = document.createElement('div');
      movieInfo.classList.add('divMovie');
      movieInfo.innerHTML = `
        <h3>${movie.title} - (${movie.year})</h3>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Duración:</strong> ${movie.duration}</p>
        <p><strong>Género:</strong> ${movie.genre.join(', ')}</p>
        <p><strong>Rate:</strong> ${movie.rate}</p>
      `;
  
      movieElement.appendChild(posterImage);
      movieElement.appendChild(movieInfo);
      filmsSection.appendChild(movieElement);
    });
  });
  