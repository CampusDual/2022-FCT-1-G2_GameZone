import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get(
        "http://localhost:33333/tournaments/tourUsers?columns=tour_name,description,start_date,end_date,tour_id,user_name,tour_name"
      )
      .subscribe((res) => console.log(res));

    this.http
      .get(
        "http://localhost:33333/tournaments/tournaments?columns=id,tour_name,description,start_date,end_date"
      )
      // @ts-ignore
      .subscribe((res) => console.log(...res.data));
  }
  }


