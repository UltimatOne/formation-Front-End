import { DureeLimite } from '../Interfaces/DureeLimite';

class Stagiaire implements DureeLimite {
  nom: string;
  prenom: string;
  finContrat: Date;

  constructor(nom: string, prenom: string, finContrat: Date) {
    this.nom = nom;
    this.prenom = prenom;
    this.finContrat = finContrat;
  }

  get fin(): string {
    return this.finContrat.toLocaleDateString();
  }

  travailler(): string {
    return `${this.nom} ${this.prenom} a fait des photocop et a apporté le café ! Merci Alex`;
  }

  prolonger(jours: number): void {
    this.finContrat.setDate(this.finContrat.getDate() + jours);
    console.log(
      `La date de fin de contrat a été prolongée jusqu'au ${this.fin}`
    );
  }
}

export default Stagiaire;