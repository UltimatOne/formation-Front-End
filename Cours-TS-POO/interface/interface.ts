interface Collaborateur {
    nom: string;
    prenom: string;
    travailler(): string;
  }
  interface Remunerer extends Collaborateur {
    salaire: number;
    augmentation(percent: number): void;
  }
  interface DureeLimite extends Collaborateur {
    finContrat: Date;
    prolonger(jours: number): void;
  }
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
  const employee: CDI = new CDI(`Terieur`, `Alex`, 1000);
  const larbin: Stagiaire = new Stagiaire(
    `Nareff`,
    `Pol`,
    new Date('2022/12/31')
  );
  const temporaire: CDD = new CDD(
    `Nicouette`,
    `Sandra`,
    new Date('2022/12/31'),
    1000
  );
  employee.augmentation(10);
  larbin.prolonger(30);
  temporaire.augmentation(11);
  temporaire.prolonger(60);