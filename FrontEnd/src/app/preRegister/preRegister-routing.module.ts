import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PreRegisterComponent} from "./preRegister.component";


const routes: Routes = [{
  path: '',
  component: PreRegisterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreRegisterRoutingModule { }
