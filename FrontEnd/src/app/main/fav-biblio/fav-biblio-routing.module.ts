import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavBiblioComponent } from "./fav-biblio.component";

const routes: Routes = [
  {
    path: "",
    component: FavBiblioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavBiblioRoutingModule { }
