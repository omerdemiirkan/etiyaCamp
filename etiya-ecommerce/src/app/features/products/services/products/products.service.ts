import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product';
import { ProductForAdd } from '../../models/productAddForm';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiControllerUrl:string = `${environment.apiUrl}/products`

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiControllerUrl)
  }

  getAllByCategories(categoryId:number):Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiControllerUrl + `?categoryId=${categoryId}`)
  }

  add(product: ProductForAdd): Observable<Product> {
    return this.httpClient.post<Product>(this.apiControllerUrl, product);
  }

}
