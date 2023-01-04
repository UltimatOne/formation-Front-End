import { Request, Response } from "express";
import TodoService from "../service/todo.service";

export default class TodoController {
    service: TodoService

    constructor(service: TodoService) {
        this.service = service
    }

    getAll = (req: Request, res: Response): void => {
        res.send(this.service.getAll())
    }

    getById = (req: Request, res: Response): void => {
        const id = req.params.id
        const data = this.service.getById1(+id)
        res.send(data)
    }

    deleteById = (req:Request, res: Response) => {
        const id = req.params.id;
        this.service.deleteById(+id)
        res.sendStatus(200)
    }
    create = (req:Request, res: Response) => {
        const task = req.body.task 
        const todo = this.service.createTodo(task)
        res.send(todo)
    }

    /**
     * si l'id n'existe pas je crée un objet
     * l'id dans l'url doit correspondre à l'id du body
     * si les id sont concordantes je modifie l'objet (on ne touche pas l'id)
     */

    update = (req:Request, res:Response) => {
        const id = req.params.id
        const body = req.body
        const data = this.service.updateTodo(body, +id)
        res.send(data)
    }
}

