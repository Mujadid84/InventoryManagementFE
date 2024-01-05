import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products:Product[]=[];

  constructor(private inventoryService: InventoryService, private router:Router){
  }
  

  ngOnInit()
  {
    this.loadProducts();
  }

  addNewProduct()
  {
    this.router.navigate(['/products/create']);
  }
  editProduct(productId: number)
  {
    this.router.navigate(['/products/edit',productId]);
  }
  deleteProduct(productId: number)
  {
    this.inventoryService.deleteProduct(productId).subscribe(x=>{
      this.loadProducts();
    });
  }

  loadProducts()
  {
    this.inventoryService.getProducts().subscribe(products=>{
      this.products = products;
    });
  }

}
