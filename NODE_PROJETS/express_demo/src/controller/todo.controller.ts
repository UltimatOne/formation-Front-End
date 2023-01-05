/* The controller is the class that manages the data coming from the outside and calls the methods of
the service */
import { Request, Response } from "express";
import TodoService from "../service/todo.service";
import TodoServicePersistance from "../service/todo.service.persistance";

// le controller gère les datas provenants de l'exterieur et appelle les méthodes du service
export default class TodoController {
    service: TodoServicePersistance

    // on appelle le service 
    constructor(service: TodoServicePersistance) {
        this.service = service
    }

    /* Defining a function called getAll that takes two parameters, req and res. The req parameter is of
    type Request and the res parameter is of type Response. The function returns nothing (void). */
    getAll = async (req: Request, res: Response): Promise<void> => {
        const data = await this.service.getAll()
        res.send(data)
    }

    getById = async (req: Request, res: Response): Promise<void> => {
        const id = req.params.id
        const data = await this.service.getById(+id)
        res.send(data)
    }

    /* Deleting a record from the database. */
    deleteById = (req: Request, res: Response): void => {
        const id = req.params.id;
        this.service.deleteById(+id)
            .then(data => { res.sendStatus(200) })
            .catch(err => res.send("Suppréssion impossible"))
    }

    /* Creating a new todo item. */
    create = async (req: Request, res: Response): Promise<void> => {
        console.log(req.body)
        const task = req.body.task
        const todo = await this.service.createTodo(task)
        res.send(todo)
    }

    /* The above code is updating the todo item. */
    update = async (req: Request, res: Response): Promise<void> => {
        const id = req.params.id
        const body = req.body.task
        try {
            const data = await this.service.updateTodo(body, +id)
            res.send(data)
        } catch (err) {
            res.send(err)
        }
    }

    //     patch  = (req:Request, res: Response) => {
    //         const id = req.params.id
    //         const body = req.body
    //         const data = this.service.patch(+id, body)
    //         res.send(data)
    //     }
}
