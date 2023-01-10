import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bouton-generique',
  templateUrl: './bouton-generique.component.html',
  styleUrls: ['./bouton-generique.component.scss']
})
export class BoutonGeneriqueComponent {
  @Input()
  boutonTexte!:string;
  @Input()
  alertMessage!:string;

  onClick(){
    alert(this.alertMessage);
  }
}
