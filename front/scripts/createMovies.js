
const genres = [
    "Acción",
    "Aventura",
    "Bélica",
    "Catástrofe",
    "Ciencia Ficción",
    "Comedia",
    "Crimen",
    "Documental",
    "Drama",
    "Fantasía",
    "Historia",
    "Infantiles",
    "Misterio",
    "Musicales",
    "Romance",
    "Suspenso",
    "Terror"
];



const btnSubmit = document.getElementById('btnSubmit');
const btnCleaner = document.getElementById('btnCleaner');
const options = document.getElementById('options');
const title = document.getElementById('title');
const year = document.getElementById('year');
const director = document.getElementById('director');
const duration = document.getElementById('duration');
const rate = document.getElementById('rate');
const poster = document.getElementById('poster');


function renderGenres() {
    options.innerHTML = '';

    for (const genre of genres) {
        const input = document.createElement('input');
        const label = document.createElement('label');

        input.type = 'checkbox';
        input.id = genre;
        input.name = "genre[]";
        input.value = genre;

        label.htmlFor = genre;
        label.textContent = genre;

        options.appendChild(input);
        options.appendChild(label);
    }
}

renderGenres();

function validateCheckboxes() {
    const checkboxes = document.querySelectorAll('input[name="genre[]"]');
    const genres = [];

    for (const item of checkboxes) {
        if (item.checked) {
            item.classList.add("selected");
            genres.push(item.id);
        }
    }
    return genres;
}

function handlerSubmit(event) {
    event.preventDefault();
    const genres = validateCheckboxes();
    console.log(title.value, year.value, director.value, duration.value, rate.value, poster.value)
    if (![title.value, year.value, director.value, duration.value, rate.value, poster.value, genres].every(Boolean)) return alert('Faltan llenar campos');

    const movie = {
        title: title.value,
        year: year.value,
        director: director.value,
        duration: duration.value,
        rate: rate.value,
        poster: poster.value,
        genre: genres
    };

    axios.post('http://localhost:3000/movies', movie, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => alert('Película enviada'))
      .catch(error => console.log(error));  

            // const response = axios.post("http://localhost:3000/movies", movie);
            // response.then (()=> {alert('Película enviada')}).catch((error)=> console.log(error))
            // ;
    
        
  
    // fetch('http://localhost:3000/movies', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json' // Especifica el tipo de contenido del cuerpo de la solicitud como JSON
    //     },
    //     body: JSON.stringify(movie) // Convierte el objeto JavaScript a una cadena de texto en formato JSON
    //   }).then(()=> alert('Película enviada')).catch((error)=> console.log(error));

}

function cleanInputs() {
    title.value = "";
    year.value = "";
    director.value = "";
    duration.value = "";
    rate.value = "";
    poster.value = "";

    const checkboxes = document.querySelectorAll('input[name="genre[]"]');
    for (const item of checkboxes) {
        item.checked = false;
    }
}

btnSubmit.addEventListener('click', handlerSubmit);
btnCleaner.addEventListener('click', cleanInputs); // Agregué el evento click para limpiar los inputs
