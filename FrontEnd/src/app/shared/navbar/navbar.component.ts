import {Component, OnChanges} from "@angular/core";

import { AuthService } from "ontimize-web-ngx";
import {ActivatedRoute, Router} from "@angular/router";



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

  constructor(public authService: AuthService, private router : Router, private  route:ActivatedRoute) {
    console.log(this.router.url)
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
    this.router.navigate(["main/search"],{queryParams: {title:(event.target as HTMLInputElement).value} })
  }

  validateUrl(){
    return !(/\/main\/profile./.test(this.router.url))
  }
}
