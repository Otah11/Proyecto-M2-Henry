//const { getMoviesService, postMoviesService } = require('../services/moviesService');
const moviesService = require ('../services/moviesService')

const getMoviesController = async (req, res) => {
    try {
        const movies = await moviesService.getMoviesService();
        res.status(200).json(movies);
    } catch (error) {
        console.error("Error en el controlador de películas:", error.message);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
const postMoviesController = async (req, res) => {
    try {
        const { title, duration, year, director, genre, rate, poster } = req.body;
        const respuestaMoviesController = await moviesService.postMoviesService ({ title, duration, year, director, genre, rate, poster });
        res.status(201).json(respuestaMoviesController)
    } catch (error) {
        res.status(500).json({ error: "Error en crear la pelicula" });
        
    }
}


module.exports = {getMoviesController, postMoviesController};
