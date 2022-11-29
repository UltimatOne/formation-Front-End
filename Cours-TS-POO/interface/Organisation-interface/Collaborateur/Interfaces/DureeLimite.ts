import { Collaborateur } from './Collaborateur';

export interface DureeLimite extends Collaborateur {
  finContrat: Date;
  prolonger(jours: number): void;
}