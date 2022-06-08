import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdatePriceComponent} from "./update-price.component";
import {PriceDetailComponent} from "./price-detail/price-detail.component";



const routes: Routes = [
  {
    path: '',
    component: UpdatePriceComponent
  },
  {
    path: ":id",
    component: PriceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePriceRoutingModule { }
