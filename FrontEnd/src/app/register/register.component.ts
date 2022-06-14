import {Component} from "@angular/core";
import {AuthService} from "ontimize-web-ngx";
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RegisterComponent,
    },
  ],
})
export class RegisterComponent {
  fc = new FormControl();
  user = new User();
  auth = btoa("demo:demouser");

  baseURL: string = "http://localhost:33333/users/register";

  constructor(
    public authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {
    this.user.birthday = new Date();
  }

  addUser() {
    this.Register(this.user).subscribe(
      () => {
        console.log("User added");
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.authService.login(this.user.user_,this.user.password)
          .subscribe(() => {
            this.router.navigate(["/main/stripe"]).then(() => {
            });
          })
      })}

    Register(user
  :
    User
  ):
    Observable < any > {
      const headers = {"content-type": "application/json"};
      const body =
        '{"data": ' +
        JSON.stringify(user) +
        '  ,"sqltypes": {"user_": 12,"birthday": 91}} ';
      console.log(body);
      console.log(headers);
      return this.http.post(this.baseURL, body, {headers: headers});
    }
  }
