import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourUsersComponent } from './tour-users/tour-users.component';
import { TournamentsComponent } from './tournaments.component';


const routes: Routes = [
  {
    path: '',
    component: TournamentsComponent
  },
  {
    path: ':id',
    component: TourUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentsRoutingModule { }
