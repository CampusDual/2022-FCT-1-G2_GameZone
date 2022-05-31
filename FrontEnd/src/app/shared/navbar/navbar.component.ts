import { Component } from "@angular/core";

import { AuthService } from "ontimize-web-ngx";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user: any;
  logged: boolean;

  constructor(public authService: AuthService) {
    this.user = this.authService.getSessionInfo().user;
    if (!this.authService.isLoggedIn()){
      this.logged = false;
    } else {
      this.logged = true;
    }
  }



}
