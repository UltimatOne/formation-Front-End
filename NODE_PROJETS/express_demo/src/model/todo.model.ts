
interface IPatch{
    task: string
    completed: boolean
}
// définition du model de données
class TodoModel {
    id?: number
    task?: string
    completed?: boolean
    static count: number = 1;

    constructor(...data:any[]) {
        const [obj] = data

        if(typeof(obj) == "string") {
        this.id = TodoModel.count;
        this.task = obj 
        this.completed = false
        TodoModel.count ++
        } 
        
        else if(Object.keys(obj).length == 2) {
            this.id = TodoModel.count;
            ({task: this.task, completed: this.completed} = obj)
            /** ce qui équivaut à:
            this.task = obj.task
            this.completed = obj.completed
            */
            TodoModel.count++
        } 
        
        else if(Object.keys(obj).length == 3) {
            ({id: this.id, task: this.task, completed: this.completed} = obj)
        } 
        
        else {
            throw "erreur lors de la mise à jour"
        }
    }
    patch = (data: Partial<IPatch>) => {
        if (data.task) this.task = data.task
    }
}
export {IPatch, TodoModel}

