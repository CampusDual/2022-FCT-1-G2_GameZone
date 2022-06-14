import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewSubsRoutingModule } from './new-subs-routing.module';
import { NewSubsComponent } from './new-subs.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';


@NgModule({
  declarations: [NewSubsComponent],
  imports: [
    CommonModule,
    NewSubsRoutingModule,
    OntimizeWebModule,
    OChartModule
  ]
})
export class NewSubsModule { }
