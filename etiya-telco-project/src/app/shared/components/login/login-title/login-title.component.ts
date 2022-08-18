import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-title',
  templateUrl: './login-title.component.html',
  styleUrls: ['./login-title.component.css']
})
export class LoginTitleComponent implements OnInit {

  @Input() title!:string

  constructor() { }

  ngOnInit(): void {
  }

}
