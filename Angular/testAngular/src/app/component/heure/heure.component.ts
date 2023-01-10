import { Component } from '@angular/core';

@Component({
  selector: 'app-heure',
  templateUrl: './heure.component.html',
  styleUrls: ['./heure.component.scss']
})
export class HeureComponent {
  timezones: string[] = [
    'Europe/Paris',
    'Europe/London',
    'Europe/Helsinki',
    'America/Los_Angeles',
    'America/Montreal'
  ];
  setTime(timezone: string){
    const date = new Date().toLocaleString('fr-FR', { timeZone: timezone });
    const time = date.split(' ')[1];

    setInterval(() => {
      this.setTime(timezone)
    }, 1000)
    return time;
  }
}
//   heures: any[] = [
//   {
//     setTime(timezone: string): string {
//     const date = new Date().toLocaleString('fr-FR', { timeZone: timezone });
//     const time = date.split(' ')[1];
//     return time;
//    }
//   },
//   {
//     setTime(timezone: string): string {
//       const date = new Date().toLocaleString('fr-FR', { timeZone: timezone });
//       const time = date.split(' ')[1];
//       return time;
//     }
//   },
//   {
//     setTime(timezone: string): string {
//       const date = new Date().toLocaleString('fr-FR', { timeZone: timezone });
//       const time = date.split(' ')[1];
//       return time;
//     }
//   }
//   ]
// }
// const heure = setInterval(HeureComponent, 1000)