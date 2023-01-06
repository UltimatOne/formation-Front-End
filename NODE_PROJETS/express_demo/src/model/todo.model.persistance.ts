const checkAttribut = ["task", "completed"]
export default class TodoPersistance {
    id!: number
    [task: string]: any
    completed!: boolean

    constructor(...data: any[]) {
        const [obj] = data
        if (typeof (obj) == "string") {
            this.create(obj)
        } else {
            this.update(obj)
        }
    }

    create = (obj: string) => {
        this.task = obj
        this.completed = false
    }
    update = (obj: any) => {
        for (let key in obj) {
            if (checkAttribut.includes(key)) {
                this[key] = obj[key]
            }
        }
    }
}