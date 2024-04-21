const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: [String], // Ahora se define como un array de cadenas
    rate: Number,
    poster: String
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
