import { Component } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  films: any[] = [
    {
      id: 1,
      nom: "Retour vers le futur",
      
    }
  ]
}
