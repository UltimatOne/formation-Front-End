import { DureeLimite } from '../Interfaces/DureeLimite';
import { Remunerer } from '../Interfaces/Remunerer';

class CDD implements Remunerer, DureeLimite {
  nom: string;
  prenom: string;
  salaire: number;
  finContrat: Date;

  constructor(nom: string, prenom: string, finContrat: Date, salaire: number) {
    this.nom = nom;
    this.prenom = prenom;
    this.finContrat = finContrat;
    this.salaire = salaire;
  }

  travailler(): string {
    return `${this.nom} ${this.prenom} travail comme un ouf pour gratter le CDI :)`;
  }

  get fin(): string {
    return this.finContrat.toLocaleDateString();
  }

  prolonger(jours: number): void {
    this.finContrat.setDate(this.finContrat.getDate() + jours);
    console.log(
      `La date de fin de contrat a été prolongée jusqu'au ${this.fin}`
    );
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
}

export default CDD;