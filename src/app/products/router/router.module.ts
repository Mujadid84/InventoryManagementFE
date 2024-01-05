import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { AddProductComponent } from '../components/add-product/add-product.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent
  },
  {
    path: 'create',
    component: AddProductComponent
  },
  {
    path: 'edit/:id',
    component: AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
