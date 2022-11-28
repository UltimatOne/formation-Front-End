// définition de la classe
class Employe {
    // Les attributs de la classe
    private nom: string;
    private prenom: string;
    private salaire: number;

    // Méthode qui permet de passer les attributs au moment de l'instanciation de la classe
    constructor(nom: string, prenom: string, salaire: number = 1000) {
        this.nom = nom;
        this.prenom = prenom;
        this.salaire = salaire;
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
  
  employe1.augmentation(10);