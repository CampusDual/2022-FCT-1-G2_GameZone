import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';


export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children:[
      {path: 'cover',loadChildren:()=>import('./cover/cover.module').then(m=>m.CoverModule)},
      {path: 'media',loadChildren:()=>import('./media/media.module').then(m=>m.MediaModule)},
      {path: 'reviews',loadChildren:()=>import('./reviews/reviews.module').then(m=>m.ReviewsModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
