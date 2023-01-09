import { Component } from '@angular/core';
import listeEmployees from '../../../../../db.json'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  hidden: boolean = true;
  toggle(){
    this.hidden = !this.hidden;
  }
  today: Date = new Date();
  employees : any[] = listeEmployees
}
