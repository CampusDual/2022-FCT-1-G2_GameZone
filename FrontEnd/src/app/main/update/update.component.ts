//import { Component, OnInit } from '@angular/core';
import {AuthService, OFormComponent} from "ontimize-web-ngx";
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { stringify } from "querystring";


interface User1 {
  name:string,
  surname:string,
  email:string,
  password:string,
  user_:string,
  birthday:Date
}
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

  @ViewChild('form', {static : true})
  form : OFormComponent;

  fc  = new FormControl()
  user = new User();
  auth = btoa("demo:demouser")
  usuario : string
  user1 : User1;
  baseURL: string = "http://localhost:33333/users/user/search"

  constructor(public authService : AuthService, private http : HttpClient) {
    //this.user.birthday = new Date()
    //this.user.name = new string
    this.verUser(authService.getSessionInfo().user);
  }

  ngOnInit() {
  }

  updateUser() {
    this.form.update();

  }

  verUser(usuario:string) {
    this.Ver(usuario)
      .subscribe(data => {
        this.form.setData(data.data[0])
        //console.log(this.user1)
      })
      //.add(console.log(this.user1))
  }


  Update(user:User): Observable<any> {
    const headers = { 'content-type': 'application/json', 'Authorization' : 'Basic ' + this.auth}
    const body= "{\"data\": "+JSON.stringify(user) +"  ,\"sqltypes\": {\"user_\": 12,\"birthday\": 91}} " ;
    console.log(body)
    console.log(headers)
    return this.http.put(this.baseURL, body,{'headers':headers})
  }

  Ver(usuario:string): Observable<any> {
    const headers = { 'content-type': 'application/json', 'Authorization' : 'Basic ' + this.auth}
    const body= '{"filter": {"user_": "'+usuario+'"},"columns": ["name", "surname", "email", "password", "user_", "birthday"]}' ;
    console.log(body)
    return this.http.post(this.baseURL, body,{'headers':headers})
  }

}
