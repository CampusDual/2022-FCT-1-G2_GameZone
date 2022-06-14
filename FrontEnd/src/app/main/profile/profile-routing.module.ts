import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';


export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children:[
      {
        path: 'summary',
        loadChildren:()=>import('./summary/summary.module').then(m=>m.SummaryModule)
      }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
