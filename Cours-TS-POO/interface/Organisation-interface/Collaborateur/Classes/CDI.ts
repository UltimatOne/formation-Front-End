import { Remunerer } from '../Interfaces/Remunerer';

class CDI implements Remunerer {
  nom: string;
  prenom: string;
  salaire: number;

  constructor(nom: string, prenom: string, salaire: number) {
    this.nom = nom;
    this.prenom = prenom;
    this.salaire = salaire;
  }

  augmentation(pourcentage: number): void {
    if (pourcentage < 0) {
      throw new Error('Le pourcentage doit être positif');
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
  travailler(): string {
    return `${this.prenom} ${this.nom} a travaillé comme un pro !`;
  }
}

export default CDI;