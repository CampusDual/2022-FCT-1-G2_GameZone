import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SeeUsersComponent} from "./see-users.component";
import {CustomersDetailComponent} from "./customers-detail/customers-detail.component";


const routes: Routes = [
  {
    path: '',
    component: SeeUsersComponent
  },
  {
    path: ":user_",
    component: CustomersDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeeUsersRoutingModule { }
