import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdatePriceComponent} from "./update-price.component";


const routes: Routes = [
  {
    path: '',
    component: UpdatePriceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePriceRoutingModule { }
