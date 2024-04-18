const { Router } = require("express")
const moviesRouter = require('./moviesRouters')

const router = Router()

router.get('/movies', moviesRouter)

module.exports = router