import Animal from '../../Interfaces/Animal'

export default abstract class Mammifere implements Animal {
    _nom: string;
    _poids: number;
    _dateNaissance: Date;

    constructor(nom: string, poids: number, dateNaissance: Date){
        this._nom = nom;
        this._poids = poids;
        this._dateNaissance = dateNaissance;
    }
    display(){
        console.log ('Je suis un mammifère')
    }
    public get age(): number{
        const aujourdhui = new Date();
        const dateNaissance = this._dateNaissance;
        let age = aujourdhui.getFullYear() - dateNaissance.getFullYear();
        const mois = aujourdhui.getMonth() - dateNaissance.getMonth();
        if (mois < 0 || (mois === 0 && aujourdhui.getDate() < dateNaissance.getDate())) {
            age--;
        }
    return age;
    }
    public get nom(): string {
        return this.nom
    }
    public get poids(): number {
        return this.poids
    }
}
