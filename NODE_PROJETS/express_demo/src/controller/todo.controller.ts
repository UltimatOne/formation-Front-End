/* The controller is the class that manages the data coming from the outside and calls the methods of
the service */
import { Request, Response } from "express";
import TodoService from "../service/todo.service";

// le controller gère les datas provenants de l'exterieur et appelle les méthodes du service
export default class TodoController {
    service: TodoService

    // on appelle le service 
    constructor(service: TodoService) {
        this.service = service
    }

   /* Defining a function called getAll that takes two parameters, req and res. The req parameter is of
   type Request and the res parameter is of type Response. The function returns nothing (void). */
    getAll = (req: Request, res: Response): void => {
        res.send(this.service.getAll())
    }

    getById = (req: Request, res: Response): void => {
        const id = req.params.id
        const data = this.service.getById1(+id)
        res.send(data)
    }

/* Deleting a record from the database. */
    deleteById = (req:Request, res: Response) => {
        const id = req.params.id;
        this.service.deleteById(+id)
        res.sendStatus(200)
    }

/* Creating a new todo item. */
    create = (req:Request, res: Response) => {
        const task = req.body.task
        const todo = this.service.createTodo(task)
        res.send(todo)
    }

/* The above code is updating the todo item. */
    update = (req:Request, res: Response) => {
        const id = req.params.id
        const body = req.body
        const data = this.service.updateTodo(body, +id)
        res.send(data)
    }

    patch  = (req:Request, res: Response) => {
        const id = req.params.id
        const body = req.body
        const data = this.service.patch(+id, body)
        res.send(data)
    }

}
