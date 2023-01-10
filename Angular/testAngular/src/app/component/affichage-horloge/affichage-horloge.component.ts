import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-affichage-horloge',
  templateUrl: './affichage-horloge.component.html',
  styleUrls: ['./affichage-horloge.component.scss']
})
export class AffichageHorlogeComponent {
  @Input()
  time: string = '00:00:00';
}
