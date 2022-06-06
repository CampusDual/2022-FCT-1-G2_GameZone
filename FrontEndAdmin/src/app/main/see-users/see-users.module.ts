import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeeUsersRoutingModule } from './see-users-routing.module';
import { SeeUsersComponent } from './see-users.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';

@NgModule({
  declarations: [SeeUsersComponent, CustomersDetailComponent],
  imports: [
    CommonModule,
    SeeUsersRoutingModule,
    OntimizeWebModule
  ]
})
export class SeeUsersModule { }
