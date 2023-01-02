import TodoModel from "../model/todo.model"
import TodoRepository from "../repository/todo.repository"

export default class TodoService {
    repo: TodoRepository
    constructor(repo: TodoRepository) {
        this.repo = repo
    }
    getAll = (): TodoModel[] => {
        return this.repo.getAll()
    }
}