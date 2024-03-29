import {Component, OnChanges} from "@angular/core";

import { AuthService } from "ontimize-web-ngx";


@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnChanges {
  ngOnChanges(){
    console.log(this.user);
  }

  user: any;
  logged: boolean;
  admin: boolean = false;

  constructor(public authService: AuthService) {
    this.user = this.authService.getSessionInfo().user;
    if (!this.authService.isLoggedIn()) {
      this.logged = false;
    } else {
      this.logged = true;
    }

    if (this.authService.getSessionInfo().user == "demo") {
      this.admin = true;
      console.log("si");
    } else {
      console.log(this.authService.getSessionInfo());
      this.admin = false;
      console.log("no");
    }
  }
}
