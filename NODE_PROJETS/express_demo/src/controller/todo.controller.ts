import {Request, Response} from "express"
import TodoService from "../service/todo.service";

export default class TodoController {

    service: TodoService

    constructor(service: TodoService){
        this.service = service
    }
    getAll = (req: Request, res: Response): void => {
        res.send(this.service.getAll())
    }
    getById = (req: Request, res: Response): void => {
        const id = req.params.id
        const data = this.service.getById(+id)
        res.send(data)
    }
    deleteById = (req: Request, res: Response): void => {
        const id = req.params.id
        const data = this.service.deleteById(+id)
        res.sendStatus(200)
    }
}