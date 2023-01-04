import express, { Request, Response } from "express";
import router from "./router/todo.router";
import "dotenv/config"

// instance de express
const app = express();

// utilisation d'une variable d'environnement
const port = process.env.PORT

// instance du router de express ayant pour route par defaut todo
app.use("/todo",router)

// définition du port pour le server
app.listen(port, () => {
    console.log(`server lancé sur le port ${port}`)
})
