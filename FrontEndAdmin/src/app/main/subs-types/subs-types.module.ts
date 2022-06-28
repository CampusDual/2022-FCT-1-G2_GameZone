import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { SubsTypesComponent } from './subs-types.component';
import { SubsTypesRoutingModule } from './subs-types-routing.module';


@NgModule({
  declarations: [SubsTypesComponent],
  imports: [
    CommonModule,
    SubsTypesRoutingModule,
    OntimizeWebModule,
    OChartModule
  ]
})
export class SubsTypesModule { }
