import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    OntimizeWebModule,
    RouterModule
  ],
  declarations: [
  NavbarComponent],
    exports: [
        CommonModule,
        NavbarComponent
    ]
})
export class SharedModule { }
