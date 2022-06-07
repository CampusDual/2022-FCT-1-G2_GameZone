import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePriceRoutingModule } from './update-price-routing.module';
import { UpdatePriceComponent } from './update-price.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';


@NgModule({
  declarations: [UpdatePriceComponent],
  imports: [
    CommonModule,
    UpdatePriceRoutingModule,
    OntimizeWebModule
  ]
})
export class UpdatePriceModule { }
