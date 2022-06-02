import { AuthService, OFormComponent } from "ontimize-web-ngx";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Component, ViewChild } from "@angular/core";

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
export class UpdateComponent{

  @ViewChild('form', {static : true})
  form : OFormComponent;

  fc  = new FormControl()
  auth = btoa("demo:demouser")
  user : string
  baseURL: string = "http://localhost:33333/users/user/search"

  constructor(public authService : AuthService, private http : HttpClient) {
    this.verUser(authService.getSessionInfo().user);
  }

  updateUser() {
    this.form.update();
  }

  verUser(user:string) {
    this.Ver(user)
      .subscribe(data => {
        this.form.setData(data.data[0])
      })
  }

  Ver(user:string): Observable<any> {
    const headers = { 'content-type': 'application/json', 'Authorization' : 'Basic ' + this.auth}
    const body= '{"filter": {"user_": "'+user+'"},"columns": ["name", "surname", "email", "password", "user_", "birthday"]}' ;
    return this.http.post(this.baseURL, body,{'headers':headers})
  }

}
