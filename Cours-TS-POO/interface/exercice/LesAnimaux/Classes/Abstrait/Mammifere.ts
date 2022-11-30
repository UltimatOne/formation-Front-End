import Animal from '../../Interfaces/Animal';

export default abstract class Mammifere implements Animal {
  _nom: string;
  _poids: number;
  _dateNaissance: Date;

  constructor(nom: string, poids: number, dateNaissance: Date) {
    this._nom = nom;
    this._poids = poids;
    this._dateNaissance = dateNaissance;
  }

  public get age() {
    const annee = new Date().getFullYear() - this._dateNaissance.getFullYear();
    const mois = new Date().getMonth() - this._dateNaissance.getMonth();
    if (mois < 0) {
      return annee - 1;
    } else {
      return annee;
    }
  }

  public get nom(): string {
    return this._nom;
  }

  public get poids(): number {
    return this._poids;
  }

  display(): void {
    console.log(`Je suis un mammifère`);
  }
}