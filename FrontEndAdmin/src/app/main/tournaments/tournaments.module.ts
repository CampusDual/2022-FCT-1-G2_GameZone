import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentsRoutingModule } from './tournaments-routing.module';
import { TournamentsComponent } from './tournaments.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';



@NgModule({
  declarations: [TournamentsComponent],
  imports: [
    CommonModule,
    TournamentsRoutingModule,
    OntimizeWebModule
  ]
})
export class TournamentsModule { }
