import { Component, OnInit } from '@angular/core';
import {AuthService} from "ontimize-web-ngx";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authService : AuthService) { }

  ngOnInit() {
  }

}
