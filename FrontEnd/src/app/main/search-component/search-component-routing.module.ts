import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchComponentComponent } from "./search-component.component";

const routes: Routes = [
  {
    path: "",
    component: SearchComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchComponentRoutingModule { }
