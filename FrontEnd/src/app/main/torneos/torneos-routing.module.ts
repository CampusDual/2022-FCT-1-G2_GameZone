import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TorneosComponent} from "./torneos.component";


const routes: Routes = [{
  path:'',
  component: TorneosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TorneosRoutingModule { }
