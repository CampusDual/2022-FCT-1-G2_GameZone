import {AuthService, OFormComponent} from "ontimize-web-ngx";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Component, OnInit, ViewChild, } from '@angular/core';
@Component({
  selector: 'see-users',
  templateUrl: './see-users.component.html',
  styleUrls: ['./see-users.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SeeUsersComponent
    }
  ]

})
export class SeeUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
