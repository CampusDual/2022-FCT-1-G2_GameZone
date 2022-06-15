import {AfterViewInit, Component} from "@angular/core";
import { StripeService } from "./stripe.service";
import {HttpClient} from "@angular/common/http";
interface subType {
  id: number;
  price: number;
  sub_type: string;
}
@Component({
  selector: "app-stripe",
  templateUrl: "./stripe.component.html",
  styleUrls: ["./stripe.component.scss"],
})
export class StripeComponent implements AfterViewInit {
  data: any;
  dataParsed: subType[];
  constructor(private service: StripeService, private http : HttpClient) {}

  handlePaymentClick(amount: number) {
    this.service.makePayment(amount);
  }

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
