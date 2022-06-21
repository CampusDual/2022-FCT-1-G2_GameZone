import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-eventos",
  templateUrl: "./eventos.component.html",
  styleUrls: ["./eventos.component.css"],
})
export class EventosComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(
        "http://localhost:33333/events/eventUsers?columns=event_id,user_name,event_name,description,start_date,end_date"
      )
      .subscribe((res) => console.log(res));

    this.http
      .get(
        "http://localhost:33333/events/events?columns=id,event_name,description,start_date,end_date,"
      )
      // @ts-ignore
      .subscribe((res) => console.log(...res.data));
  }
}
