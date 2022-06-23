import {Component, OnDestroy, OnInit} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Timestamp } from "rxjs/internal/operators/timestamp";
import { AuthService } from "ontimize-web-ngx";

interface Tournament {
  id: number;
  tour_name: string;
  description: string;
  start_date: Timestamp<any>;
  end_date: Timestamp<any>;
  prize: string;
  users: string[];
  users_max: number;
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
export class TorneosComponent implements OnInit, OnDestroy {
  dataTournaments: Tournament[];
  dataUsers: User[];
  logged: boolean;
  user: string;
  dataLoaded:Promise<boolean> = Promise.resolve(false)
  participa:boolean = false;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.user = this.authService.getSessionInfo().user;
    if (!this.authService.isLoggedIn()) {
      this.logged = false;
    } else {
      this.logged = true;
    }
    this.getData();
  }

  ngOnInit() {

  }

  parseData() {
    this.dataTournaments.forEach((x) => {
      x.users = [];
      this.dataUsers.forEach((y) => {
        if (y.tour_id === x.id) {
          x.users.push(y.user_name);
        }
        if(x.id === y.tour_id && this.user === y.user_name){
          this.participa=true
        }
      });
    });
    this.dataLoaded=Promise.resolve(true)
  }

  Participar(id) {

    const headers = { "content-type": "application/json" };
    let body = '{"data":{"tour_id":'+id+',"user_name":"'+this.user+'"}}';


      this.http
        .post("http://localhost:33333/tourusers/tourUsers", body, { headers })
        .subscribe(
          () => {},
          () => {},
          () => this.getData()
        );
  }

  getData() {
    this.http
      .get(
        "http://localhost:33333/tournaments/tourUsers?columns=tour_name,description,start_date,end_date,tour_id,user_name,tour_name,prize"
      )
      .subscribe(
        // @ts-ignore
        (res) => (this.dataUsers = [...res.data]),
        (err) => console.log(err)
      );

    this.http
      .get(
        "http://localhost:33333/tournaments/tournaments?columns=id,tour_name,description,start_date,end_date,prize,users_max"
      )
      .subscribe(
        // @ts-ignore
        (res) => (this.dataTournaments = [...res.data]),
        (err) => console.log(err),
        () => {
          this.parseData();
        }
      );
  }

  ngOnDestroy() {
    this.dataLoaded = Promise.resolve(false);
  }
}

