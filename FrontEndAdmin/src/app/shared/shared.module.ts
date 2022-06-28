import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';

import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    OntimizeWebModule,
    RouterModule,
    OChartModule
  ],
  declarations: [
  ],
    exports: [
        CommonModule
    ]
})
export class SharedModule { }
