abstract class Chat {
    public _nom!: string;
    public _age!: number;
    public _poids!: number;

    constructor(nom: string, age: number, poids: number) {
        this._nom = nom;
        this._age = age;
        this._poids = poids;
    }

    public get nom(): string {
        return this._nom
    }
    public get age(): number {
        return this._age
    }
    public get poids(): number {
        return this._poids
    }

    public set nom(nouveauNom: string) {
     this._nom = nouveauNom
    }
    public set age(nouvelleAge: number){
     this._age = nouvelleAge
    }
    public set poids(nouveauPoids: number) {
     this._poids = nouveauPoids
    }
    public afficherChat(): void {
        console.log(`
                Mon super chat s'appelle ${this._nom}. \r
                Il a ${this._age} ans\r
                Et il pèse ${this._poids} kg !`);
    }
}

class Europeen extends Chat {
    _surnoms : string[];
    _origine: string = 'Europe';

    constructor (nom: string, age: number, poids: number, ...surnoms: string[]) {
        super(nom, age, poids);
        this._surnoms = surnoms;
    }
    get surnoms(): string[] {
    return this._surnoms
    }
    set surnoms(surnoms:string[]) {
        surnoms.forEach(surnom => {this.surnoms.push(surnom)})
    }
}
const chat = new Europeen ("Maho", 6, 10, 'Rouquin', 'Minou')

chat.afficherChat();
chat.surnoms = ['kiki', 'chaton'];
console.log(chat.surnoms);