import Poney from "./Poney";
import Guerrier from "../interfaces/Guerrier";

export default class PoneyGuerrier extends Poney implements Guerrier {
    private _energie: number = this.energieMax;

    get energieMax (): number {
        return this._niveau * 5;
    }

    get energie (): number {
        return this._energie;
    }

    set energie (energieASoustraire: number){
        this._energie -= energieASoustraire;
    }

    /**
     * Effectue une attaque dont les dégâts sont multipliés par l'énergie dépensée
     * @param nombreDenergie nombre d'énergie à dépenser
     * @returns dégâts de l'attaque puissante
     */
    attaquePuissante(nombreDenergie: number): number {
        this.energie = nombreDenergie;
        return this.attaqueBasique() * nombreDenergie;
    }
}