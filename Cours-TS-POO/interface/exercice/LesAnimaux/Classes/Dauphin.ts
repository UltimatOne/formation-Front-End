import Aquatique from '../Interfaces/Aquatique';
import Mammifere from './Abstrait/Mammifere';

export default class Dauphin extends Mammifere implements Aquatique {
  constructor(nom: string, poids: number, dateNaissance: Date) {
    super(nom, poids, dateNaissance);
  }

  display(): void {
    console.log(
      `Le Dauphin ${this._nom} a ${this._dateNaissance} an(s) et pèse ${this._poids} kg !`
    );
  }
  retenirRespiration(): void {
    console.log(`Le Dauphin ${this._nom} retient sa respiration ! `);
  }

  respirerSousLeau(): void {
    this.retenirRespiration();
  }

  nager(): void {
    console.log(`Le Dauphin ${this._nom} nage !`);
  }

  cliquetter(): void {
    console.log(`Le Dauphin ${this._nom} cliquette !`);
  }
}