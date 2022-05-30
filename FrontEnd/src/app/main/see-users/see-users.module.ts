import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeeUsersRoutingModule } from './see-users-routing.module';
import { SeeUsersComponent } from './see-users.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';

@NgModule({
  declarations: [SeeUsersComponent],
  imports: [
    CommonModule,
    SeeUsersRoutingModule,
    OntimizeWebModule
  ]
})
export class SeeUsersModule { }
