const app = require("./src/server")
const dbCon = require("./src/config/dbCon")//agregado demo

const PORT = 3000

dbCon().then(
    (res)=>{
        app.listen(PORT, ()=>console.log(`server is listening on port ${PORT}`))
    })
    .catch((err) => {
        console.log("Error al conectar la BDD");
    });
    



