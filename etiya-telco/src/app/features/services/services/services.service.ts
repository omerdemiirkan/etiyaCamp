import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  apiControllerUrl:string=`${environment.apiUrl}/services`

  constructor(private http:HttpClient) { }


  getAll():Observable<Service[]>{
    
    return this.http.get<Service[]>(this.apiControllerUrl)
  }
  

  getById(id:number):Observable<Service>{
    return this.http.get<Service>(`${this.apiControllerUrl}/${id}`)
  }

  add(Service:Service): Observable<Service>{
    return this.http.post<Service>(this.apiControllerUrl,Service);
  }

  delete(id:number):Observable<Service>{
    return this.http.delete<Service>(`${this.apiControllerUrl}/${id}`)
  }

  update(Service:Service):Observable<Service>{
    return this.http.put<Service>(`${this.apiControllerUrl}/${Service.id}`,Service)
  }


}
