import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecommendationsComponent } from "./recommendations.component";

const routes: Routes = [
  {
    path: "",
    component: RecommendationsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendationsRoutingModule { }
