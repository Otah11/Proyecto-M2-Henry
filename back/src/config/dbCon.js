require("dotenv").config();
const mongoose = require("mongoose");

const dbCon = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conexión establecida con MongoDB Atlas.");
    } catch (error) {
        console.error("Error al conectar la base de datos:", error.message);
        process.exit(1);
    }
};

module.exports = dbCon;
