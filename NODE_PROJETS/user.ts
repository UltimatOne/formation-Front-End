export default class User {
    id: number
    nom: string
    prenom: string
    date_de_naissance?: string
    date_inscription: Date
    nationalite?: string

    constructor(data?: string) {
        if(data) this.create(this.nom, this.prenom, this.date_inscription )
    }

    create = (nom: string, prenom: string, date_inscription: Date) => {
        this.nom = nom
        this.prenom = prenom
        this.date_inscription = date_inscription
    }
    update = (nom: any) => {
        const checkAttribut = [ "id", "nom", "prenom", "date_inscription"]
        for (let key in nom) {
            if (checkAttribut.includes(key)) {
                this[key] = nom[key]
            }
        }
    }
}
