import Poney from "./Poney";

export default class Arene {

    lancerCombat(poney1: Poney, poney2: Poney){
        while (poney1.estVivant && poney2.estVivant) {
            poney2.pv -= poney1.attaqueBasique();
            poney1.pv -= poney2.attaqueBasique();
        }
        const vainqueur: Poney = this.definirVainqueur(poney1, poney2);
        console.log(`${vainqueur.nom} a gagné !`);
    }

    /**
     * Affiche qui est le vainqueur
     * @param poney1 
     * @param poney2 
     * @returns Le poney qui est toujours en vie
     */
    private definirVainqueur(poney1: Poney, poney2: Poney){
        if (poney1.estVivant) {
            return poney1;
        } else {
            return poney2;
        }
    }

}