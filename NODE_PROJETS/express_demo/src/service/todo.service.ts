import {IPatch, TodoModel} from "../model/todo.model"
import TodoRepository from "../repository/todo.repository"

export default class TodoService {

    repo: TodoRepository

    constructor(repo: TodoRepository) {
        this.repo = repo
    }

    getAll = (): TodoModel[] => {
        return this.repo.getAll()
    }

    // find renvoie la première occurence
    getById1 = (id: number):TodoModel => {
        const resu = this.repo.getAll().find(item => item.id == id)
        if (!resu) throw "id non trouvée";
        return resu;
    }

    // filter renvoie toutes les occurences qui matchent avec la condition
    getById2 = (id: number):TodoModel => {
        const resu = this.repo.getAll().filter(item => item.id == id)[0]
        if (!resu) throw "id non trouvée";
        return resu;
    }

    // pas fou, trop long
    getById3 = (id: number):TodoModel => {
        let resu;
        this.repo.getAll().forEach(item => {
            if(item.id == id) resu = item
        })
        if (!resu) throw "id non trouvée";
        return resu;
    }

    deleteById = (id: number): void => {
        this.repo.deleteById(id)
    }

    deleteById2 = (id: number) => {
        const index = this.getAll().findIndex(item => item.id == id)
        this.repo.deleteById2(index)
    }
    createTodo = (task: string):TodoModel => {
        if(!task) throw "il manque un paramètre"
        const newTodo = new TodoModel(task)
        this.repo.createTodo(newTodo)
        return newTodo
    }
    updateTodo = (item: TodoModel, id: number): TodoModel => {
        if(item.id != id) throw "todo incorrecte"
        const exist = this.getAll().find(data => data.id == item.id)
        if(!exist){
            const todo = new TodoModel(item.task, item.completed);
            this.repo.createTodo(todo)
            return todo;
        } else {
            const todo = new TodoModel(item)
            const index = this.getAll().findIndex(item => item.id == todo.id)
            this.repo.update(todo, index)
            return todo
        }
    }
    patch = (id: number, item: Partial<IPatch>): TodoModel => {
        const index = this.getAll().findIndex(data => data.id == id)
        if(index != undefined) throw "id inconnue"
        const data = this.repo.patch(index, item)
        return data
    }
}
