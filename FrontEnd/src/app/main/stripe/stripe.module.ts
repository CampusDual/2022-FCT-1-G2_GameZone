import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StripeRoutingModule } from './stripe-routing.module';
import { StripeComponent } from '../stripe/stripe.component';


@NgModule({
  declarations: [StripeComponent],
  imports: [
    CommonModule,
    StripeRoutingModule
  ]
})
export class StripeModule { }
