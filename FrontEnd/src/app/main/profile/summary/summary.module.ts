import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';

import {SafeHtml, SummaryComponent} from "./summary.component";
import {OntimizeWebModule} from "ontimize-web-ngx";


@NgModule({
  declarations: [SummaryComponent, SafeHtml],
  imports: [CommonModule, SummaryRoutingModule, OntimizeWebModule],
  exports: [SummaryComponent],
})
export class SummaryModule {}
