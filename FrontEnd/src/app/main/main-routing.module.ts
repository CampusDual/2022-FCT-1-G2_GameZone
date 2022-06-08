import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainComponent } from "./main.component";

export const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    //canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
      { path: 'update', loadChildren: () => import('./update/update.module').then(m => m.UpdateModule) },
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      { path: 'ranking', loadChildren: () => import('./ranking/ranking.module').then(m => m.RankingModule) },
      { path: 'feed', loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)},
      { path: 'stripe', loadChildren: () => import('./stripe/stripe.module').then(m => m.StripeModule)},
      { path: 'search', loadChildren: () => import('./search-component/search-component.module').then(m => m.SearchComponentModule)}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }
