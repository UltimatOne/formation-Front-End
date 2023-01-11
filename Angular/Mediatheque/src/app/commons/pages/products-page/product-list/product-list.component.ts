import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input()
  products: any = [
    {
      id: 1,
      product: "the real life"
    },{
      id: 2,
      product: "the mysterious life"
    }
  ]
}
