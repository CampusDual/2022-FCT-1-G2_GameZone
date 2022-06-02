import { Component } from "@angular/core";
import { StripeService } from "./stripe.service";

@Component({
  selector: "app-stripe",
  templateUrl: "./stripe.component.html",
  styleUrls: ["./stripe.component.scss"],
})
export class StripeComponent {
  constructor(private service: StripeService) {}

  handlePaymentClick(amount: number) {
    this.service.makePayment(amount);
  }
}
