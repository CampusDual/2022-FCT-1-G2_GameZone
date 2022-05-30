import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SeeUsersComponent} from "./see-users.component";


const routes: Routes = [
  {
    path: '',
    component: SeeUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeeUsersRoutingModule { }
