import Gobelet from "./Gobelet";

export default class joueur {
    protected _nom : string;
    protected _score: number = 0;

    constructor(
        nom: string, 
        ){
            this._nom = nom;
        }
    get nom(): string {
        return this.nom
    }
    set nom(nouveauNom: string){
        if (nouveauNom.trim().length > 0) {
            this._nom = nouveauNom;
          } else {
            throw new Error("Le nom doit contenir au moins un caractère");
          }
    }
    public get score(): number{
        return this._score
    }
    public set score(nouveauScore: number){
        this._score = nouveauScore
    }
    




    jouer(gobelet: Gobelet) {
        this.score = gobelet.lancer()
    };
    afficherScore(){
        console.log(`Ce joueur à fait un score de ${this.score}`)
    };
}