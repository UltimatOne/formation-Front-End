import Gobelet from "./Gobelet";
import Joueur from "./Joueur";

export default class Partie {
    gobelet: Gobelet
    joueurs: Joueur[] = []
    
    initialiserPartie(...participants: Joueur[]){
        this.gobelet = new Gobelet()
        const nombreDeJoueurs: number = participants.length
        this.gobelet.ajouterDices(nombreDeJoueurs)
        this.joueurs = participants
    }

    lancerPartie(){
        for (let joueur of this.joueurs){
            joueur.jouer(this.gobelet)
        }
    }
    
    meilleureScore(){
        let joueurAvecMeilleurScore: Joueur = this.joueurs[0];
        for (let joueur of this.joueurs){
            if (joueur.score > joueurAvecMeilleurScore.score){
                joueurAvecMeilleurScore = joueur;
            }
        }
        return joueurAvecMeilleurScore
    }

    afficherGagnant(){
        console.log(this.meilleureScore().nom)
    }
}
