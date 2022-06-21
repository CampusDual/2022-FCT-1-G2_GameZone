import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-torneos",
  templateUrl: "./torneos.component.html",
  styleUrls: ["./torneos.component.css"],
})
export class TorneosComponent implements OnInit {
  dataTournaments: [];
  dataUsers: [];

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
        (err) => console.log(err));
  }
}
