export default interface Guerrier{
    energie: number

    /**
     * Lance une attaque puissante qui fait mal
     * @param nombreDePm
     */
    attaquePuissante(nombreDeEnergie: number): number
}