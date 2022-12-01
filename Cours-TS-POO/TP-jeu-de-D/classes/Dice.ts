export default class Dice {
    public valeur: number;

    lancer(): number{
        this.valeur = Math.floor(Math.random() * 6 ) + 1
        return this.valeur
    }
}

