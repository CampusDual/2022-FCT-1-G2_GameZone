import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePriceRoutingModule } from './update-price-routing.module';
import { UpdatePriceComponent } from './update-price.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { PriceDetailComponent } from './price-detail/price-detail.component';


@NgModule({
  declarations: [UpdatePriceComponent, PriceDetailComponent],
  imports: [
    CommonModule,
    UpdatePriceRoutingModule,
    OntimizeWebModule
  ]
})
export class UpdatePriceModule { }
