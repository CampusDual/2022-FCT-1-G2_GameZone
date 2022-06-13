import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';


export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children:[
      {
        path: 'cover',
        loadChildren:()=>import('./cover/cover.module').then(m=>m.CoverModule)
      }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
