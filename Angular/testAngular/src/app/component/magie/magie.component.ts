import { Component } from '@angular/core';

@Component({
  selector: 'app-magie',
  templateUrl: './magie.component.html',
  styleUrls: ['./magie.component.scss']
})
export class MagieComponent {
  magie: boolean = true;
  toggle(){
    this.magie = !this.magie;
  }
}
