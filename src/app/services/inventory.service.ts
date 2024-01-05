import { Injectable } from "@angular/core";
import { environment } from "./../../environments/environment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Product } from "../models/product";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({providedIn:'root'})
export class InventoryService {
    private env = environment;
    constructor(
        private httpClient: HttpClient
      ) {}

      getProducts():Observable<Product[]>{
        return this.httpClient.get<Product[]>(`${this.env.apiUrl}/products/getAllProducts`).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => error);
              })
        );
      }

      getProductById(productId:number):Observable<Product>{
        return this.httpClient.get<Product>(`${this.env.apiUrl}/products/GetProductById?productId=${productId}`).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => error);
              })
        );
      }
      deleteProduct(productId:number){
        return this.httpClient.post(`${this.env.apiUrl}/products/DeleteProduct?productId=${productId}`,{}).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => error);
              })
        );
      }

      createProduct(product:Product){
        return this.httpClient.post(`${this.env.apiUrl}/products/InsertProduct`,product).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => error);
              })
        );
      }
      updateProduct(product:Product){
        return this.httpClient.post(`${this.env.apiUrl}/products/UpdateProduct`,product).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => error);
              })
        );
      }
}