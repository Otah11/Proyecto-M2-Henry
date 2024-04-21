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
    }
};