import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainComponent } from "./main.component";

export const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    //canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'see-users', pathMatch: 'full' },
      { path: 'see-users', loadChildren: () => import('./see-users/see-users.module').then(m => m.SeeUsersModule) }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }
