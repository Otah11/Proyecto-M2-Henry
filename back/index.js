require("dotenv").config();
const app = require("./src/app")
const dbCon = require("./src/config/dbCon")//agregado demo

const { PORT } = process.env

dbCon().then(
    (res)=>{
        app.listen(PORT, ()=>console.log(`server is listening on port ${PORT}`))
    })
    .catch((error) => {
        console.log("Error al conectar la BDD", error);
    });
    



