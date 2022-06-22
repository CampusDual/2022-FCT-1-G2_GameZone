import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Timestamp } from "rxjs/internal/operators/timestamp";
import { AuthService } from "ontimize-web-ngx";

interface Event {
  end_date: Timestamp<any>;
  event_name: string;
  description: string;
  id: number;
  start_date: number;
  users: string[];
  users_max: number;
}

interface User {
  description: string;
  end_date: Timestamp<any>;
  event_id: number;
  event_name: string;
  start_date: Timestamp<any>;
  user_name: string;
}

@Component({
  selector: "app-eventos",
  templateUrl: "./eventos.component.html",
  styleUrls: ["./eventos.component.scss"],
})
export class EventosComponent implements OnInit {
  dataEvents: Event[];
  dataUsers: User[];
  logged: boolean;
  user: string;


  constructor(private http: HttpClient, private authService: AuthService) {
    this.user = this.authService.getSessionInfo().user;
    if (!this.authService.isLoggedIn()) {
      this.logged = false;
    } else {
      this.logged = true;
    }
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http
      .get(
        "http://localhost:33333/events/eventUsers?columns=event_id,user_name,event_name,description,start_date,end_date"
      )
      .subscribe(
        // @ts-ignore
        (res) => (this.dataUsers = [...res.data]),
        (err) => console.log(err)
      );

    this.http
      .get(
        "http://localhost:33333/events/events?columns=id,event_name,description,start_date,end_date,users_max"
      )
      .subscribe(
        // @ts-ignore
        (res) => (this.dataEvents = [...res.data]),
        (err) => console.log(err),
        () =>this.parseData()
      );
  }

  Participar(id) {
    let participa : boolean = false;
    const headers = { "content-type": "application/json" };
    let body =
      '{"data":{"event_id":' + id + ',"user_name":"' + this.user + '"}}';
    if (this.dataUsers) {
      this.dataUsers.forEach((x) => {
        if (id === x.event_id && this.user === x.user_name) {
          participa = true;
        }
      });
    }

    if (!participa) {
      this.http
        .post("http://localhost:33333/eventusers/eventUsers", body, { headers })
        .subscribe(
          () => {},
          () => {},
          () => this.getData()
        );
    } else {
      alert("ya participas en este torneo");
    }
  }

  parseData() {
    this.dataEvents.forEach((x) => {
      x.users = [];
      this.dataUsers.forEach((y) => {
        if (y.event_id === x.id) {
          x.users.push(y.user_name);
        }
      });
    });
  }
}
