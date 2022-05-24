import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { UpdateComponent } from './update.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';



@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    OntimizeWebModule
  ]
})
export class UpdateModule { }
