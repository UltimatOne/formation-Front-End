import  express, { Request, Response}  from "express";
import router from "./router/todo.router";
import "dotenv/config"

//instance de express
const app = express();

//utilisation d'une variable d'environnement
const port = process.env.PORT

app.use(express.json())
//instance du routeur de express ayant une route todo
app.use("/todo", router);

//définition du port pour le serveur
app.listen(port, () => {
    console.log(`serveur lancé sur le port ${port}`)
})