import { Component, OnInit } from '@angular/core';
import {AuthService} from "ontimize-web-ngx";
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: UpdateComponent
    }
  ]

})
export class UpdateComponent implements OnInit {

  fc  = new FormControl()
  user = new User();
  auth = btoa("demo:demouser")

  baseURL: string = "http://localhost:33333/users/user"
  constructor(public authService : AuthService, private http : HttpClient) {
    this.user.birthday = new Date()
  }

  ngOnInit() {
  }

  updateUser() {
    this.Register(this.user)
      .subscribe(data => {
        console.log(data)
      })
  }


  Register(user:User): Observable<any> {
    const headers = { 'content-type': 'application/json', 'Authorization' : 'Basic ' + this.auth}
    const body= "{\"data\": "+JSON.stringify(user) +"  ,\"sqltypes\": {\"user_\": 12,\"birthday\": 91}} " ;
    console.log(body)
    console.log(headers)
    return this.http.post(this.baseURL, body,{'headers':headers})
  }

}