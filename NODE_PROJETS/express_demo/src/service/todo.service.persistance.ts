import TodoRepositoryPersistance from "../repository/todo.repository.persistance";
import TodoPersistance from "../model/todo.model.persistance";

export default class TodoServicePersistance {

    #repo: TodoRepositoryPersistance

    constructor(repo: TodoRepositoryPersistance) {
        this.#repo = repo
    }

    getAll = (): Promise<TodoPersistance[]> => {
        return this.#repo.getAll()
    }

    getById = (id: number): Promise<TodoPersistance> => {
        return this.#repo.getById(id)
    }

    deleteById = (id: number): Promise<any> => {
        return this.#repo.delete(id)
    }

    createTodo = (item: string): Promise<TodoPersistance> => {
        const data = new TodoPersistance(item)
        return this.#repo.create(data)
    }

    updateTodo = async (item: TodoPersistance, id: number): Promise<TodoPersistance> => {
        if(item.id != id) throw "objet corrompue"
        const checkId = await this.getById(id);
        const data = new TodoPersistance()

        if (typeof (checkId) == "string") {
            console.log("oui")
            data.create(item.task, item.completed)
            return this.#repo.create(data)
        }
        data.update(item)
        return this.#repo.update(data).catch(err => err)
    }

    patchTodo = (id: number, item: TodoPersistance): Promise<TodoPersistance> => {
        const data = new TodoPersistance()
        data.update(item)
        return this.#repo.patch(id, data).catch(err => err)
    }

}