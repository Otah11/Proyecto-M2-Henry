const { getMoviesService } = require('../services/moviesService');

const moviesController = async (req, res) => {
    try {
        const movies = await getMoviesService();
        res.status(200).json(movies);
    } catch (error) {
        console.error("Error en el controlador de películas:", error.message);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = moviesController;
