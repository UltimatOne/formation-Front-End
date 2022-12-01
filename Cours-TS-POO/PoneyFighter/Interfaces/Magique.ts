export default interface Magique {
    pm: number;

    /**
     * Lance une attaque magique qui fait des dégâts !
     * La puissance du spell est propotionnelle aux PM utilisés.
     * @param nombreDePm Nombre de PM à utiliser pour l'attaque
     */
    attaqueMagique(nombreDePm: number): number;
}