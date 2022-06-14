import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewSubsComponent } from './new-subs.component';


const routes: Routes = [
  {
    path: '',
    component: NewSubsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewSubsRoutingModule { }
