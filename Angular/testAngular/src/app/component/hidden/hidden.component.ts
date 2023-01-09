import { Component } from '@angular/core';

@Component({
  selector: 'app-hidden',
  templateUrl: './hidden.component.html',
  styleUrls: ['./hidden.component.scss']
})
export class HiddenComponent {
  hidden: boolean = true;
  toggle(){
    this.hidden = !this.hidden;
  }
}
