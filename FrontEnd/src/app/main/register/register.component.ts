import { Component } from '@angular/core';
import {AuthService} from "ontimize-web-ngx";
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";
import {FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RegisterComponent
    }
  ]

})
export class RegisterComponent{


  fc  = new FormControl()
  user = new User();
  auth = btoa("demo:demouser")

  baseURL: string = "http://localhost:33333/users/user"

  constructor(public authService : AuthService, private http : HttpClient) {
    this.user.birthday = new Date()

  }

  addUser() {
    this.Register(this.user)
      .subscribe(data => {
        console.log(data)
      })
  }


  Register(user:User): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body= "{\"data\": "+JSON.stringify(user) +"  ,\"sqltypes\": {\"user_\": 12,\"birthday\": 91}} " ;
    console.log(body)
    console.log(headers)
    return this.http.post(this.baseURL, body,{'headers':headers})
  }
}
