const checkAttribut = ["task", "completed"]
export default class TodoPersistance {
    id!: number
    [task: string]: any
    completed!: boolean

    constructor(...data: any[]) {
        const [obj] = data
        if (typeof (obj) == "string") {
            this.task = obj
            this.completed = false
        } else {
            for (let key in obj) {
                if (checkAttribut.includes(key)) {
                    this[key] = obj[key]
                }
            }
        }
    }
}