/**
 * des mignons petits chatons trop kawaii
 */
class Chat {
    private _nom!: string;
    private _race!: string;
    private _age!: number;
    private _poids!: number;


  //Méthode qui permet de passer les attributs au moment de l'instanciation de la classe
  constructor(nom: string, race: string, age: number, poids: number) {
    this.nom = nom;
    this.race = race;
    this.age = age;
    this.poids = poids;
}

public get nom(): string {
    return this._nom
}
public get race(): string {
    return this._race
}
public get age(): number {
    return this._age
}
public get poids(): number {
    return this._poids
}
public set nom(nouveauNom: string) {
 this._nom = nouveauNom
}
public set race(nouvelleRace: string){
 this._race = nouvelleRace
}
public set age(nouvelAge: number) {
 this._age = nouvelAge
}
public set poids(nouveauPoids: number) {
 this._poids = nouveauPoids
}


    afficherChat(): void {
      console.log(`
              Mon super chat s'appelle ${this.nom} \r
              C'est un ${this.race} \r
              Il a ${this.age} an(s) \r
              Et il pèse ${this.poids} kg ! 
          `);
    }
  }
  
  const monChat: Chat = new Chat('Maho', 'chat de gouttiere', 6, 10);
  

  monChat.afficherChat();