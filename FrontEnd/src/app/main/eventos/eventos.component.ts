import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-eventos",
  templateUrl: "./eventos.component.html",
  styleUrls: ["./eventos.component.css"],
})
export class EventosComponent implements OnInit {
  dataEvents: [];
  dataUsers: [];

  constructor(private http: HttpClient) {
    this.http
      .get(
        "http://localhost:33333/events/events?columns=id,event_name,description,start_date,end_date,"
      )

      .subscribe(
        // @ts-ignore
        (res) => (this.dataEvents = [...res.data]),
        (err) => console.log(err),
        () => console.log("this.dataEvents", this.dataEvents)
      );

    this.http
      .get(
        "http://localhost:33333/events/eventUsers?columns=event_id,user_name,event_name,description,start_date,end_date"
      )

      .subscribe(
        // @ts-ignore
        (res) => (this.dataUsers = [...res.data]),
        (err) => console.log(err)
      );
  }

  ngOnInit() {}
}
