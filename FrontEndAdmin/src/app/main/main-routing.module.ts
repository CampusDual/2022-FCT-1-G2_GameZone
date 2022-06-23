import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainComponent } from "./main.component";

export const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    //canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'dash-board', pathMatch: 'full' },
      { path: 'see-users', loadChildren: () => import('./see-users/see-users.module').then(m => m.SeeUsersModule) },
      { path: 'update-price', loadChildren: () => import('./update-price/update-price.module').then(m => m.UpdatePriceModule) },
      { path: 'tournaments', loadChildren: () => import('./tournaments/tournaments.module').then(m => m.TournamentsModule) },
      { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
      { path: 'new-subs', loadChildren: () => import('./new-subs/new-subs.module').then(m => m.NewSubsModule) },
      { path: 'subs-price', loadChildren: () => import('./subs-price/subs-price.module').then(m => m.SubsPriceModule) },
      { path: 'dash-board', loadChildren: () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule) }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }
