const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require('./routes/index');
const moviesRouter = require("./routes/moviesRouters");

const app = express();

// Configuración de middlewares
app.use(morgan("dev")); // Morgan para el logging de solicitudes
app.use(cors()); // CORS para permitir solicitudes desde cualquier origen
app.use(express.json()); // Middleware para parsear JSON

app.use(router);
app.use("/movies", moviesRouter)

module.exports = app;

