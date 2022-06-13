import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RegisterRoutingModule,
    OntimizeWebModule
  ]
})
export class RegisterModule { }
