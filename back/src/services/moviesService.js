const Movie = require('../models/Movie');

module.exports = {
    getMoviesService: async () => {
        try {
            const movies = await Movie.find({});
            return movies;
        } catch (error) {
            console.error("Error al obtener las películas:", error.message);
            throw error;
        }
    },
    postMoviesService: async (pelicula) => {
        try {
            const newMovie = await Movie.create(pelicula)
            return newMovie;
        } catch (error) {
            return error;
            
        }
    }
};