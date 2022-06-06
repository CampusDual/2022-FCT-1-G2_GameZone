import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "ontimize-web-ngx";
import {Router} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class StripeService {
  paymentHandler: any = null;

  constructor(private http: HttpClient, private authService: AuthService,private router:Router) {
    this.invokeStripe();
  }

  public sendEmail(
    email: string,
    amount: number,
    expirationDate: Date
  ): Promise<any> {
    return Email.send({
      Host: "smtp.elasticemail.com",
      Username: "nebation98@gmail.com",
      Password: "40E8188BCAE970897EF65057D1A57E0B17B6",
      To: email,
      From: "nebation98@gmail.com",
      Subject: "prueba Subject",
      Body: "Gracias por suscribirte a Game Zone, el total del pago ha sido : " + amount + " y se expira la membresía el día : " + expirationDate.toISOString().slice(0, 10),
    });
  }

  public sendRequest(date, subId): Observable<any> {
    let headers = { "Content-Type": "application/json" };
    const body = {
      filter: {
        user_: this.authService.getSessionInfo().user,
      },
      data: {
        sub_id: subId,
        expiration_date: date.toISOString().slice(0, 10),
      },
      sqltypes: {
        expiration_date: 91,
      },
    };
    console.log(body);
    return this.http.put("http://localhost:33333/users/update", body, {
      headers,
    });
  }

  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: "pk_test_51L534GHYsU93QMKbQBAWHxrZB9eJ14uBXroYN050wBM8DbFwOzKyQP9hZ2xFmgVaM18zgXZ4FgfvLjcIvPseG3c700UajxIYC3",
      locale: "auto",
      token: (stripeToken: any) => {
        const date = new Date();
        if (amount == 9.99) {
          date.setMonth(date.getMonth() + 1);
          this.sendEmail(stripeToken.email, amount, date);
          this.sendRequest(date, 1).subscribe({ error: (err) => console.log(err) });
          this.router.navigate(["/main/home"]);
        } else if (amount == 24.99) {
          date.setMonth(date.getMonth() + 3);
          this.sendEmail(stripeToken.email, amount, date);
          this.sendRequest(date, 2).subscribe({ error: (err) => console.log(err) });
          this.router.navigate(["/main/home"]);
        } else {
          date.setFullYear(date.getFullYear() + 1);
          this.sendEmail(stripeToken.email, amount, date);
          this.sendRequest(date, 3).subscribe({ error: (err) => console.log(err) });
          this.router.navigate(["/main/home"]);
        }
      },
    });
    paymentHandler.open({
      name: "Game Zone",
      description: "Suscripcion",
      amount: amount * 100,
    });
  }

  private invokeStripe() {
    if (!window.document.getElementById("stripe-script")) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: "pk_test_51L534GHYsU93QMKbQBAWHxrZB9eJ14uBXroYN050wBM8DbFwOzKyQP9hZ2xFmgVaM18zgXZ4FgfvLjcIvPseG3c700UajxIYC3",
          locale: "auto",
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert("Payment has been successfull!");
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
}
