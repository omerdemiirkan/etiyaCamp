import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../../models/category';

@Injectable()
export class CategoriesService {

  apiControllerUrl=`${environment.apiUrl}/categories`

  constructor(private http:HttpClient) { }


  getList():Observable<Category[]>{

    return this.http.get<Category[]>(this.apiControllerUrl)
  }

}
