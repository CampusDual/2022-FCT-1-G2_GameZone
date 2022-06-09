import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { EventsUsersComponent } from './events-users/events-users.component';


@NgModule({
  declarations: [EventsComponent, EventsUsersComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    OntimizeWebModule
  ]
})
export class EventsModule { }
