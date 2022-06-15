import { AfterViewInit, Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface subType {
  id: number;
  price: number;
  sub_type: string;
}

@Component({
  selector: "app-pre-register",
  templateUrl: "./preRegister.component.html",
  styleUrls: ["./preRegister.component.scss"],
})
export class PreRegisterComponent implements AfterViewInit {
  data: any;
  dataParsed: subType[];

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.http
      .get(
        "http://localhost:33333/subscription_types/subscriptionTypes?columns=id,sub_type,price"
      )
      .subscribe(
        (data) => (this.data = data),
        (error) => console.log(error),
        () =>
          (this.dataParsed = this.data.data.sort(
            ({ price: a }, { price: b }) => a-b
          ))
      );
  }
}
