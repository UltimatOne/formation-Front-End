import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  nom: string = "François"
  prenom: string = "Claude"
  job: string = ""
  image: string = "https://www.gala.fr/imgre/fit/~1~gal~2022~02~01~05a4a674-190d-441e-b339-e47836a55fdb.jpeg/1134x928/quality/80/claude-francois.jpeg"
}
