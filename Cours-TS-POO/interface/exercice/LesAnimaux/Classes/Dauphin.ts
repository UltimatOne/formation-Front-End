import Aquatique from './../Interfaces/Aquatique';
import Mammifere from './Abstrait/Mammifere';

export default class Dauphin extends Mammifere implements Aquatique {
    constructor(nom:string, poids: number, dateNaissance: Date){
        super(nom, poids, dateNaissance);
    }
    display(): void {
        console.log(`Le Dauphin ${this._nom} a ${this._dateNaissance} ans et pèse ${this._poids}`)
    }
    retenirRespiration(): void {
        console.log (`Le Dauphin ${this._nom} retient sa respiration !`)
    }
    cliquetter()
   };
   
   export default Dauphin;