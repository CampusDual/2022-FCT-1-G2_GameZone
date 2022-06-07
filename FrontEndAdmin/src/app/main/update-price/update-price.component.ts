import { AuthService, OFormComponent } from "ontimize-web-ngx";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Component, ViewChild } from "@angular/core";

@Component({
  selector: 'app-update-price',
  templateUrl: './update-price.component.html',
  styleUrls: ['./update-price.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: UpdatePriceComponent
    }
  ]
})
export class UpdatePriceComponent {

  @ViewChild('form', {static : true})
  form : OFormComponent;

  fc  = new FormControl()
  auth = btoa("demo:demouser")
  user : string
  baseURL: string = "http://localhost:33333/subscription_types/subscriptionTypes?columns=sub_type,price"

  constructor(public authService : AuthService, private http : HttpClient) {
    this.showPrices();
  }

  showPrices() {
    this.Ver()
      .subscribe(data => {
        this.form.setData(data.data[0])
      })
  }

  Ver(): Observable<any> {
    const headers = { 'content-type': 'application/json', 'Authorization' : 'Basic ' + this.auth}
    return this.http.get(this.baseURL,{'headers':headers})
  }

}
