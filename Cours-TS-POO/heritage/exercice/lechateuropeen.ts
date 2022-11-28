abstract class Chat {
    public _nom!: string;
    public _race!: string;
    public _poids!: number;

    constructor(nom: string, race: string, poids: number) {
        this._nom = nom;
        this._race = race;
        this._poids = poids;
    }

    public get nom(): string {
        return this._nom
    }
    public get race(): string {
        return this._race
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
    public set poids(nouveauPoids: number) {
     this._poids = nouveauPoids
    }
    afficherChat(): void {
        console.log(`
                Mon super chat s'appelle ${this.nom} \r
                C'est un ${this.race} \r
                Et il pèse ${this.poids} kg !`);
    }
}