import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubsPriceComponent } from './subs-price.component';


const routes: Routes = [
  {
    path: '',
    component: SubsPriceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubsPriceRoutingModule { }
