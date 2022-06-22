import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Timestamp } from "rxjs/internal/operators/timestamp";

interface Event {
  end_date: Timestamp<any>;
  event_name: string;
  description: string;
  id: number;
  start_date: number;
  users:string []
  }
  interface User {
  description: string
  end_date: Timestamp<any>
  event_id: number
  event_name: string
  start_date: Timestamp<any>
  user_name: string
  }

@Component({
  selector: "app-eventos",
  templateUrl: "./eventos.component.html",
  styleUrls: ["./eventos.component.css"],
})
export class EventosComponent implements OnInit {
  dataEvents: Event[];
  dataUsers: User[];


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
        (err) => console.log(err),
        () => this.dataEvents.forEach((x)=>{
          x.users=[]
          this.dataUsers.forEach((y)=>{
          if(y.event_id===x.id)x.users.push(y.user_name)
          })
          })

      );
  }

  ngOnInit() {}
}
