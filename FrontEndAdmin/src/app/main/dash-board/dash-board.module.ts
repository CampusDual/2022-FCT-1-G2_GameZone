import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';


@NgModule({
  declarations: [DashBoardComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    OntimizeWebModule,
    OChartModule
  ]
})
export class DashBoardModule { }
