import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {
  listes: string[] = [
    "Miloud", "Jean-Jacques", "Corentin", "Gabriel"
  ]
}
