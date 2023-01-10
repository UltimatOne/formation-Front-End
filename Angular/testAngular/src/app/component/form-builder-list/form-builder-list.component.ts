import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder-list',
  templateUrl: './form-builder-list.component.html',
  styleUrls: ['./form-builder-list.component.scss']
})
export class FormBuilderListComponent {
  article: FormGroup = this.formBuilder.group({
    designation: ["", Validators.required],
    prix: ["",Validators.required],
  })
  submitted: boolean = false
  articles: any[] = []

  constructor(private formBuilder: FormBuilder){}

  private addArticle(){
    this.articles.push(this.article.value)
    this.article.reset()
    this.submitted = false
  }
  onSubmit(): boolean {
    this.submitted = true;
    if(this.article.invalid){
      return false;
    }else{
      this.addArticle();
      return true;
    }
  }
  get totalPrice():number{
    return this.articles.reduce((total, article) => total + article.prix, 0)
  }
  get form(){
    return this.article.controls;
  }
}
