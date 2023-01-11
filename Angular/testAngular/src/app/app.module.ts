import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoutonComponent } from './component/bouton/bouton.component';
import { UsersComponent } from './component/users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertBoutonComponent } from './component/alert-bouton/alert-bouton.component';
import { ListeComponent } from './component/liste/liste.component';
import { MagieComponent } from './component/magie/magie.component';
import { ListeFiltreComponent } from './component/liste-filtre/liste-filtre.component';
import { CartesDeVisitesComponent } from './component/cartes-de-visites/cartes-de-visites.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { HiddenComponent } from './component/hidden/hidden.component';
import { BoutonGeneriqueComponent } from './component/bouton-generique/bouton-generique.component';
import { BoutonMenuComponent } from './component/bouton-menu/bouton-menu.component';
import { AffichageHorlogeComponent } from './component/affichage-horloge/affichage-horloge.component';
import { HeureComponent } from './component/heure/heure.component';
import { ListeCoursesComponent } from './component/liste-courses/liste-courses.component';
import { ReactivListCoursesComponent } from './component/reactiv-list-courses/reactiv-list-courses.component';
import { FormBuilderListComponent } from './component/form-builder-list/form-builder-list.component';
import { UserFormComponent } from './component/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BoutonComponent,
    UsersComponent,
    AlertBoutonComponent,
    ListeComponent,
    MagieComponent,
    ListeFiltreComponent,
    CartesDeVisitesComponent,
    EmployeesComponent,
    HiddenComponent,
    BoutonGeneriqueComponent,
    BoutonMenuComponent,
    AffichageHorlogeComponent,
    HeureComponent,
    ListeCoursesComponent,
    ReactivListCoursesComponent,
    FormBuilderListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
