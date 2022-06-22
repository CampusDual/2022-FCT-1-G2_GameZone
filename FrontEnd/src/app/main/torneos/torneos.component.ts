import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Timestamp } from "rxjs/internal/operators/timestamp";

interface Tournament {
  id: number;
  tour_name: string;
  description: string;
  start_date: Timestamp<any>;
  end_date: Timestamp<any>;
  users: string[];
}

 interface User {
  tour_id: number;
  user_name: string;
  event_name: string;
  description: string;
  start_date: Timestamp<any>;
  end_date: Timestamp<any>;
}

@Component({
  selector: "app-torneos",
  templateUrl: "./torneos.component.html",
  styleUrls: ["./torneos.component.scss"],
})
export class TorneosComponent implements OnInit {
  dataTournaments: Tournament[];
  dataUsers: User[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(
        "http://localhost:33333/tournaments/tourUsers?columns=tour_name,description,start_date,end_date,tour_id,user_name,tour_name"
      )
      .subscribe(
        // @ts-ignore
        (res) => (this.dataUsers = [...res.data]),
        (err) => console.log(err)
      );

    this.http
      .get(
        "http://localhost:33333/tournaments/tournaments?columns=id,tour_name,description,start_date,end_date"
      )
      // @ts-ignore
      .subscribe((res) => (this.dataTournaments = [...res.data]),
        (err) => console.log(err)),
        this.dataTournaments.forEach((x) => {
          x.users = [];
          this.dataUsers.forEach((y) => {
          if (y.tour_id === x.id) {
          x.users.push(y.user_name);
          }
          });
          })
  }

}
