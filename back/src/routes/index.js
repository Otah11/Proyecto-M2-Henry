// ? routes

const { Router } = require("express")
const moviesRouter = require('./moviesRouters')

const router = Router()

router.use('/movies', moviesRouter)

module.exports = router