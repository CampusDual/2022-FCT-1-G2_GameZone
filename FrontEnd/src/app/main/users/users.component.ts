import { AuthService, OFormComponent } from "ontimize-web-ngx";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: UsersComponent,
    },
  ],
})
export class UsersComponent {
  @ViewChild("form", { static: true })
  form: OFormComponent;

  auth = btoa("demo:demouser");
  user: string;
  baseURL: string = "http://localhost:33333/users/user/search";

  constructor(public authService: AuthService, private http: HttpClient) {
    this.verUser(authService.getSessionInfo().user);
  }

  verUser(user: string) {
    this.Ver(user).subscribe((data) => {
      this.form.setData(data.data[0]);
    });
  }

  Ver(user: string): Observable<any> {
    const headers = {
      "content-type": "application/json",
      Authorization: "Basic " + this.auth,
    };
    const body =
      '{"filter": {"user_": "' +
      user +
        '"},"columns": ["name", "surname", "email", "user_", "birthday","expiration_date"]}';
    return this.http.post(this.baseURL, body, { headers: headers });
  }
}
