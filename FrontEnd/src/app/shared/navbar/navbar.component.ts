import {Component, OnChanges} from "@angular/core";

import { AuthService } from "ontimize-web-ngx";
import {Router} from "@angular/router";



@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnChanges {
  ngOnChanges(){
    this.authService.onLogin.asObservable().subscribe(res=> console.log(res))
  }

  user: any;
  logged: boolean;
  admin: boolean = false;

  constructor(public authService: AuthService, private router : Router) {
    this.user = this.authService.getSessionInfo().user;
    if (!this.authService.isLoggedIn()) {
      this.logged = false;
    } else {
      this.logged = true;
    }

    if (this.authService.getSessionInfo().user == "demo") {
      this.admin = true;
    } else {
      this.admin = false;
    }
  }

  handleKey(event : Event){
    console.log((event.target as HTMLInputElement).value)
    this.router.navigate(["main/search"],{queryParams: {title:(event.target as HTMLInputElement).value} })
  }
}
