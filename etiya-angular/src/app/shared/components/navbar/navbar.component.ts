import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenUserModel } from 'src/app/core/auth/models/tokenUserModel';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //today: number = Date.now();


  tokenUserModel$!:Observable<TokenUserModel | undefined>


  constructor(private authService: AuthService) {
    this.tokenUserModel$=this.authService.tokenUserModel$
  }

  ngOnInit(): void {
   
  }

  testAuth() {
    this.authService.test().subscribe((response) => {
      console.log(response);
    });
  }
  
  logOut() {
    this.authService.logOut();
  }

  isLoggedIn(): boolean {
   return this.authService.isAuthhenticated
}

}
