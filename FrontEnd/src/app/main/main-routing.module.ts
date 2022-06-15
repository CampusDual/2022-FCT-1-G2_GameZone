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
      { path: 'update', loadChildren: () => import('./update/update.module').then(m => m.UpdateModule) },
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      { path: 'ranking', loadChildren: () => import('./ranking/ranking.module').then(m => m.RankingModule) },
      { path: 'feed', loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)},
      { path: 'stripe', loadChildren: () => import('./stripe/stripe.module').then(m => m.StripeModule)},
      { path: 'search', loadChildren: () => import('./search-component/search-component.module').then(m => m.SearchComponentModule)},
      { path: 'recommendations', loadChildren: () => import('./recommendations/recommendations.module').then(m => m.RecommendationsModule)},
      { path: 'profile/:id', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
      { path: 'favlibrary', loadChildren: () => import('./fav-biblio/fav-biblio.module').then(m => m.FavBiblioModule)}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }
