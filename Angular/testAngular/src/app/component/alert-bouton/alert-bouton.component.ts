import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-bouton',
  templateUrl: './alert-bouton.component.html',
  styleUrls: ['./alert-bouton.component.scss']
})
export class AlertBoutonComponent {
  totoQuiClick(){
    alert("Tu as tout cassé !!!!!!!")
  }
}
