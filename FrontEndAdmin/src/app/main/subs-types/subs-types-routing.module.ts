import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubsTypesComponent } from './subs-types.component';


const routes: Routes = [
  {
    path: '',
    component: SubsTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubsTypesRoutingModule { }
