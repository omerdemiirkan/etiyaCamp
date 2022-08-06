import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private jwtTokenHelperService:JwtHelperService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token=this.jwtTokenHelperService.tokenGetter()
    const newRequest=request.clone(
      {
        headers:request.headers.set("Authorization",`Bearer ${token}`)
      }
    )


    return next.handle(newRequest);
  }
}
