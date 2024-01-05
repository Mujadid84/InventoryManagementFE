import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from './../../../services/inventory.service';
import { Product } from 'src/app/models/product';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  mode:string='create';
  productId:number | undefined;

  form: FormGroup = this.fb.group({
    title: new FormControl('', { validators: [Validators.required, Validators.maxLength(250)] }),
    price: new FormControl('', { validators: [Validators.required] }),
    quantity: new FormControl('', { validators: [Validators.required] }),
  });
  
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private inventoryService: InventoryService, private fb:FormBuilder)
  {
    if(activatedRoute.snapshot.params['id'])
    {
      this.mode='edit';
      this.productId=parseInt(this.activatedRoute.snapshot.params['id']);
      this.getProductDetails(this.productId);
    }
  }

  getProductDetails(productId: number)
  {
    this.inventoryService.getProductById(productId).subscribe(product=>{
      this.formControls.title.setValue(product.title);
      this.formControls.price.setValue(product.price);
      this.formControls.quantity.setValue(product.quantity);

    });
  }

  get formControls(): any {
    return this.form.controls;
  }

  saveProduct()
  {
    if(this.form.invalid){
      return;
    }
    let product:Product=this.form.value;
    if(this.mode==='create')
    {
      this.inventoryService.createProduct(product).subscribe(()=>{
        this.router.navigate(['/products']);
      }
      );
    }
    else
    {
      product.productID=this.productId!;
      this.inventoryService.updateProduct(product).subscribe(()=>{
        this.router.navigate(['/products']);
      }
      );
    }
  }
}
