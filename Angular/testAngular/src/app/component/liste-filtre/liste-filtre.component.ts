import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-filtre',
  templateUrl: './liste-filtre.component.html',
  styleUrls: ['./liste-filtre.component.scss']
})
export class ListeFiltreComponent {
  listes: string[] = [
    'Harry Potter',
    'David Bowie',
    'Stevie Wonder',
    'Jimi Hendrix',
    'Johnny Halliday'
  ];
}
