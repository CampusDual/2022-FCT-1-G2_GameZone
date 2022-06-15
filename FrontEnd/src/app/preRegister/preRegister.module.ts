import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreRegisterRoutingModule } from './preRegister-routing.module';
import {PreRegisterComponent} from "./preRegister.component";


@NgModule({
  declarations: [PreRegisterComponent],
  imports: [
    CommonModule,
    PreRegisterRoutingModule
  ]
})
export class PreRegisterModule { }
