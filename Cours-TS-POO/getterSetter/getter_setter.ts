// définition de la classe
class Employe {
    // Les attributs de la classe
    // Le "!" permet de préciser qu'on définira la valeur plus tard
    private _nom!: string;
    private _prenom!: string;
    private _salaire!: number;

    //Méthode qui permet de passer les attributs au moment de l'instanciation de la classe
    constructor(nom: string, prenom: string, salaire: number = 1000) {
        this.nom = nom;
        this.prenom = prenom;
        this._salaire = salaire;
    }

    get nom(): string {
        return this.nom
    }
    get prenom(): string {
        return this.prenom
    }
    get fullName(): string {
        return `${this.prenom} ${this.nom}`
    }
    get salaire(): number {
        return this.salaire
    }

    set nom(nouveauNom: string) {
        if (nouveauNom.length > 1) {
            this._nom = nouveauNom;
        } else {
            throw new Error("Le nom est trop court !")
        }
    }
    set prenom(nouveauPrenom: string) {
        if (nouveauPrenom.length > 1) {
            this._prenom = nouveauPrenom;
        } else {
            throw new Error("Le prénom est trop court !")
        }
    }
    set salaire(nouveauSalaire: number) {
        if (nouveauSalaire > this._salaire) {
            this._salaire = nouveauSalaire;
        } else {
            throw new Error("Le salaire est identique ou inférieur à l'ancien")
        }
    }
    /**
     * Permet d'augmenter le salaire d'un salarié (si il a bien bossé)
     * @param pourcentage Pourcentage de l'augmentation
     */
    augmentation(pourcentage: number): void {
      if (pourcentage < 0) {
          throw new Error('Le pourcentage doit être positif')
      } else {
        console.log(
          `Le salaire de ${this.prenom} ${this.nom} va être augmenté de ${pourcentage}%. Il est actuellement de ${this.salaire}`
        );
        const augmentation = (this.salaire * pourcentage) / 100;
        console.log(`Il gagnera ${augmentation}€ supplémentaires`);
        this.salaire += augmentation;
        console.log(`Son nouveau salaire est de ${this.salaire}€`);
        }
    }
}
  
const employe1: Employe = new Employe("Pol", "Nareff");
employe1.nom = "Polnareff";
employe1.prenom = "Michel";
employe1.salaire = 1000;

console.log(employe1.fullName)

employe1.augmentation(10);

employe1.nom = "   D"

console.log(employe1.fullName)