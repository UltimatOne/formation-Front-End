import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './commons/footer/footer.component';
import { NavBarComponent } from './commons/nav-bar/nav-bar.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { HomePageComponent } from './commons/pages/home-page/home-page.component';
import { ProductPageComponent } from './commons/pages/product-page/product-page.component';
import { ProductsPageComponent } from './commons/pages/products-page/products-page.component';
import { ProductCardComponent } from './commons/pages/products-page/product-card/product-card.component';
import { ProductListComponent } from './commons/pages/products-page/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    NotFoundComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductsPageComponent,
    ProductCardComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
