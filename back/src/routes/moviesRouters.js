const { Router } = require("express")
const getMoviesController = require("../controllers/moviesController")
const postMoviesController = require("../controllers/moviesController")
const moviesRouter = Router ()

moviesRouter.get('/', getMoviesController)
moviesRouter.post('/', postMoviesController)

module.exports = moviesRouter
