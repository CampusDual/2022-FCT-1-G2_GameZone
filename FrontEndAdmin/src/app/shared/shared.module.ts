import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    OntimizeWebModule,
    RouterModule
  ],
  declarations: [
  ],
    exports: [
        CommonModule
    ]
})
export class SharedModule { }
