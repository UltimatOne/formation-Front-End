import Bulletin from "./Bulletin"
import Note from "./Note"

export default class Eleve {
    private _nom: string;
    private _prenom: string;
    private _bulletin: Bulletin;
  
    constructor(nom: string, prenom: string, bulletin: Bulletin) {
      this._nom = nom;
      this._prenom = prenom;
      this._bulletin = bulletin;
    }
  


    public ajouterNotes(...nouvellesNotes: Note[]): void {
        nouvellesNotes.forEach(
            (note) => {
            this._bulletin.ajouterNote(note)
            }
        )  
    }
    public afficherMoyenne(): void {
        console.log(
            `La moyenne de ${this._prenom} est de  ${this._bulletin.calculerMoyenne()}`
        )
    }
    public afficherNotes(): void {
        console.log(
            `Notes de ${this._prenom} ${this._nom} : \r
            ${this._bulletin.afficherNotes()}`
        );
    }
}
  
    