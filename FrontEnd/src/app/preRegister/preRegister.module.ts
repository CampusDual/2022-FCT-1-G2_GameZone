import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreRegisterRoutingModule } from './preRegister-routing.module';
import {PreRegisterComponent} from "./preRegister.component";
import {OntimizeWebModule} from "ontimize-web-ngx";


@NgModule({
  declarations: [PreRegisterComponent],
  imports: [CommonModule, PreRegisterRoutingModule, OntimizeWebModule],
})
export class PreRegisterModule {}
