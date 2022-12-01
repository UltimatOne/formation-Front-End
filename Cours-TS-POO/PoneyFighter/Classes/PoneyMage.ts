import Poney from "./Poney";
import Magique from "../interfaces/Magique";

export default class PoneyMage extends Poney implements Magique {

    private _pm: number = this.pmMax;

    get pmMax (): number {
        return this._niveau * 5;
    }

    get pm (): number {
        return this._pm;
    }

    set pm (pmASoustraire: number){
        this._pm -= pmASoustraire;
    }

    /**
     * Effectue une attaque dont les dégâts sont multipliés par le nombre de PM dépensés
     * @param nombreDePm nombre de PM à dépenser
     * @returns dégâts de l'attaque magique
     */
    attaqueMagique(nombreDePm: number): number {
        this.pm = nombreDePm;
        return this.attaqueBasique() * nombreDePm;
    }

}