import  express, { Request, Response}  from "express";
import router from "./router/todo.router";

//instance de express
const app = express();

//appel du routeur
app.use("/todo", router);

//route définie sur la page principal
app.get("/", (req : Request, res: Response) => {
    res.send("c'est tout bon")
    })

//définition du port de communication
app.listen(3000, () => {
    console.log(`serveur lancé sur le port 3000`)
})