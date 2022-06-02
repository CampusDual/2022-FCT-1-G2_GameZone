import {
  Component,
  Inject,
  Injector,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {
  AuthService,
  LocalStorageService,
  NavigationService,
} from "ontimize-web-ngx";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

interface User {
  user_: string;
}

@Component({
  selector: "login",
  styleUrls: ["./login.component.scss"],
  templateUrl: "./login.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  userCtrl: FormControl = new FormControl("", Validators.required);
  pwdCtrl: FormControl = new FormControl("", Validators.required);
  sessionExpired = false;
  router: Router;
  isAdmin: boolean;
  data: User[];

  constructor(
    private actRoute: ActivatedRoute,
    router: Router,
    @Inject(NavigationService) public navigation: NavigationService,
    @Inject(AuthService) private authService: AuthService,
    @Inject(LocalStorageService) private localStorageService,
    public injector: Injector,
    private http: HttpClient
  ) {
    this.router = router;

    const qParamObs: Observable<any> = this.actRoute.queryParams;
    qParamObs.subscribe((params) => {
      if (params) {
        const isDetail = params["session-expired"];
        if (isDetail === "true") {
          this.sessionExpired = true;
        } else {
          this.sessionExpired = false;
        }
      }
    });
  }

  ngOnInit(): any {
    this.authService.logout();
    this.navigation.setVisible(false);

    this.loginForm.addControl("username", this.userCtrl);
    this.loginForm.addControl("password", this.pwdCtrl);

    if (this.authService.isLoggedIn()) {
      this.router.navigate(["../"], { relativeTo: this.actRoute });
    } else {
      this.authService.clearSessionData();
    }
  }

  verifyAdmin() {
    this.http
      .get<User[]>("http://localhost:33333/admin/admin?columns=user_")
      .pipe(
        map((item) => {
          // @ts-ignore
          return item.data.map((x) => {
            return {
              ...x,
            } as User;
          });
        })
      )
      .subscribe((data) => (this.data = data), (error) => console.log(error), () => {
        this.data.forEach((element) => {
          if (element.user_ === this.loginForm.value.username) {
            this.login()
          }else {
            alert("Usuario erróneo o no eres administrador")
          }
        });
      });

  }

  login() {
    const userName = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    if (userName && userName.length > 0 && password && password.length > 0) {
      const self = this;
      this.authService.login(userName, password).subscribe(() => {
        self.sessionExpired = false;
        self.router.navigate(["../"], { relativeTo: this.actRoute });
      }, this.handleError);
    }
  }

  handleError(error) {
    if (error.status === 401) {
      console.error("Email or password is wrong.");
    }
  }
}
