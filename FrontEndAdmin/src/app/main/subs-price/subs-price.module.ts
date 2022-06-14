import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubsPriceRoutingModule } from './subs-price-routing.module';
import { SubsPriceComponent } from './subs-price.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';


@NgModule({
  declarations: [SubsPriceComponent],
  imports: [
    CommonModule,
    SubsPriceRoutingModule,
    OntimizeWebModule,
    OChartModule
  ]
})
export class SubsPriceModule { }
