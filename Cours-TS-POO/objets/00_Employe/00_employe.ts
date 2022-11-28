// définition de la classe
class Employe {
    // Les attributs de la classe
    // Le "!" permet de préciser qu'on définira la valeur plus tard
    nom!: string;
    prenom!: string;
    salaire!: number;
  
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
  
  const employe1: Employe = new Employe();
  employe1.nom = "Polnareff";
  employe1.prenom = "Michel";
  employe1.salaire = 1000;
  
  employe1.augmentation(10);