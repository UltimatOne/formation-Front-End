export default interface Guerrier {
    energie: number;

    /**
     * Lance une attaque physique qui fait des dégâts !
     * La puissance de l'attaque est proportionnelle à l'énergie utilisée.
     * @param nombreDenergie Nombre d'énergie à utiliser pour l'attaque
     */
    attaquePuissante(nombreEnergie: number): number;
}