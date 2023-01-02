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

    getById1 = (id: number):TodoModel =>{
        const resu = this.repo.getAll().find(item => item.id == id)
        if (!resu) throw "id non trouvée"
        return resu;
    }
/*getById3 = (id: number) => {
    let result;
    this.repo.getAll().forEach(element =>{
        if (element.id === id){
            result = element;
        }
    })
    if (!result){
        throw new Error("Cette instance n'existe pas");
    }
    return result;
}*/
}