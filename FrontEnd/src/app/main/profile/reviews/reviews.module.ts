import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import {ReviewsComponent} from "./reviews.component";
import {NgApexchartsModule} from "ng-apexcharts";


@NgModule({
  declarations: [ReviewsComponent],
  imports: [CommonModule, ReviewsRoutingModule, NgApexchartsModule],
})
export class ReviewsModule {}
