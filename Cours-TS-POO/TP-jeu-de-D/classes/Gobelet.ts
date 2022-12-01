import Dice from "./Dice";


export default class Gobelet{
    public dices: Dice[] = [];
    public valeur: number;


    lancer(): number {
        let resultat: number = 0;
        for(let dice of this.dices){
            resultat += dice.lancer() 
        } 
        this.valeur = resultat 
        return this.valeur
    }
    ajouterDices(nombreDeDes: number){
        while(this.dices.length < nombreDeDes){
            this.dices.push(new Dice())
        }
    }
    afficherScore(){
        return this.valeur
    }
}