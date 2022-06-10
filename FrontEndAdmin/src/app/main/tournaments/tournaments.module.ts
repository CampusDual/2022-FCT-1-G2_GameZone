import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentsRoutingModule } from './tournaments-routing.module';
import { TournamentsComponent } from './tournaments.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { TourUsersComponent } from './tour-users/tour-users.component';



@NgModule({
  declarations: [TournamentsComponent, TourUsersComponent],
  imports: [
    CommonModule,
    TournamentsRoutingModule,
    OntimizeWebModule
  ]
})
export class TournamentsModule { }
