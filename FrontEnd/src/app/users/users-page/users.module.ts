import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './users-page.component';


@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
