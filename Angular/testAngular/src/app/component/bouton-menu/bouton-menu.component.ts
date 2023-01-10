import { Component } from '@angular/core';

@Component({
  selector: 'app-bouton-menu',
  templateUrl: './bouton-menu.component.html',
  styleUrls: ['./bouton-menu.component.scss']
})
export class BoutonMenuComponent {
  boutons: any[] = [
    {
      texte: "Ping",
      alertMessage: "Pong"
    },
    {
      texte: "Marco",
      alertMessage: "Polo"
    },
    {
      texte: "Philippe",
      alertMessage: "Je sais où tu te caches!!!"
    }
  ]
}
