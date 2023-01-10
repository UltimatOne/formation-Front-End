import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiv-list-courses',
  templateUrl: './reactiv-list-courses.component.html',
  styleUrls: ['./reactiv-list-courses.component.scss']
})
export class ReactivListCoursesComponent {
  article!: FormGroup

  articles: any[] = []

  constructor() {
    this.article = new FormGroup({
      designation: new FormControl('', Validators.minLength(3)),
      prix: new FormControl('', [Validators.min(0.5), Validators.required])
    });
  }
  addArticle() {
    this.articles.push(this.article.value);
    this.article.reset()
  }
  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0);
  }
}
