import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoutonComponent } from './component/bouton/bouton.component';
import { UsersComponent } from './component/users/users.component';
import { FormsModule } from '@angular/forms';
import { AlertBoutonComponent } from './component/alert-bouton/alert-bouton.component';
import { ListeComponent } from './component/liste/liste.component';
import { MagieComponent } from './component/magie/magie.component';
import { ListeFiltreComponent } from './component/liste-filtre/liste-filtre.component';
import { CartesDeVisitesComponent } from './component/cartes-de-visites/cartes-de-visites.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { HiddenComponent } from './component/hidden/hidden.component';

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
    HiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
