import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import {SafeHtml, SummaryComponent} from './summary.component';

@NgModule({
  declarations: [SummaryComponent,SafeHtml],
   exports: [SummaryComponent],
  imports: [
    CommonModule,
    SummaryRoutingModule
  ]
})
export class SummaryModule { }
