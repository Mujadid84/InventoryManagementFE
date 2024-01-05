import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsRoutingModule } from './router/router.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddProductComponent, ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: []
})
export class ProductsModule { }
