import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { HomePageComponent } from './commons/pages/home-page/home-page.component';
import { ProductPageComponent } from './commons/pages/product-page/product-page.component';
import { ProductsPageComponent } from './commons/pages/products-page/products-page.component';

const routes: Routes = [{
  path: '', redirectTo: 'Home', pathMatch: 'full'
},{
  path: 'home',
  component: HomePageComponent
},{
  path: 'products',
  component: ProductsPageComponent
},{
  path: 'products/:id',
  component: ProductPageComponent
},{
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
