import TodoModel from "../model/todo.model";

export default class TodoRepository {

    todos: TodoModel[] = [
        new TodoModel("decuver"),
        new TodoModel("Aller bosser"),
        new TodoModel("Se reveiller")
    ]

    getAll = (): TodoModel[] => {
        return this.todos;
    }

}