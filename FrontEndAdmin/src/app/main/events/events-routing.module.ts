import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsUsersComponent } from './events-users/events-users.component';
import { EventsComponent } from './events.component';


const routes: Routes = [
  {
    path: '',
    component: EventsComponent
  },
  {
    path: ":id",
    component: EventsUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
