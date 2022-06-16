import { Component, OnInit } from '@angular/core';
import {OFormComponent} from "ontimize-web-ngx";

@Component({
  selector: 'app-tour-users',
  templateUrl: './tour-users.component.html',
  styleUrls: ['./tour-users.component.css']
})
export class TourUsersComponent implements OnInit {
insertMode: boolean
  constructor() { }

  ngOnInit() {

  }


  isInInsertMode() {
    this.insertMode = true
  }
}
