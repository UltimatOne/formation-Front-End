import Couleurs from "../Couleurs";

export default abstract class Poney {
  protected _nom!: string;
  protected _dateNaissance!: Date;
  protected _pvMax: number;
  protected _pv: number;
  protected _niveau: number;
  protected _couleurs: Couleurs[];

  constructor(
    nom: string,
    dateNaissance: Date | string,
    pv: number,
    niveau?: number,
    ...couleurs: Couleurs[]
  ) {
    this.nom = nom;
    this.dateNaissance = dateNaissance;
    this._pvMax = pv;
    this._pv = pv;
    this._niveau = niveau || 1;
    this._couleurs = couleurs;
  }

  public get nom(): string {
    return this._nom;
  }

  public set nom(nouveauNom: string) {
    if (nouveauNom.trim().length > 0) {
      this._nom = nouveauNom;
    } else {
      throw new Error("Le nom doit contenir au moins un caractère");
    }
  }

  public get dateNaissance(): Date {
    return this._dateNaissance;
  }

  public set dateNaissance(nouvelleDate: Date | string) {
    if (nouvelleDate instanceof Date) {
      this._dateNaissance = nouvelleDate;
    } else {
      this._dateNaissance = new Date(nouvelleDate);
    }
  }

  public get pv(): number {
    return this._pv;
  }

  public set pv(nouveauPv: number) {
    if (nouveauPv <= this._pvMax) {
      this._pv = nouveauPv;
      console.log(`${this.nom} a maintenant ${this._pv} PV ! CHEH !`);
    } else {
      throw new Error(
        "Le nombre de PV ne peut pas être supérieur à la valeur maximale"
      );
    }
  }

  get estVivant(): boolean {
    if (this._pv > 0) {
      return true;
    } else {
      return false;
    }
  }

  public get niveau(): number {
    return this._niveau;
  }

  public set niveau(nombreDeNiveaux: number) {
    this._niveau += Math.abs(nombreDeNiveaux);
  }

  public get couleurs(): Couleurs[] {
    return this._couleurs;
  }

  public set couleurs(couleurs: Couleurs[]) {
    this._couleurs = couleurs;
  }

  /**
   * Calcul le nombre de dégats infligés par le poney, en fonction de son niveau et du résultat d'un dés à 6 faces
   * @returns Dégats infligés
   */
  public attaqueBasique() {
    if (this.estVivant) {
      const degats: number = Math.floor(Math.random() * 6 * this._niveau);
      console.log(
        `${this.nom} fait une attaque basique et fait ${degats} dégats ! Waouh !`
      );
      return degats;
    } else {
      console.log(`${this.nom} est mort, il ne peut pas attaquer !`);
      return 0;
    }
  }

  /**
   * Se rend des PV, et rend la moitié à l'adversaire
   * @returns Soin apporté
   */
  public distribuerDeLAmour(): number {
    this.pv += this._niveau * 2;
    return this._niveau;
  }
}