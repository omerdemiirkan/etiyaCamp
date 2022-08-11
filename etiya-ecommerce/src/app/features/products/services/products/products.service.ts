import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiControllerUrl:string=`${environment.apiUrl}/products`
  
  constructor(private http:HttpClient) { }


  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiControllerUrl)

  }
}
