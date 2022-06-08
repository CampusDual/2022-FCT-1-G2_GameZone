import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RecommendationsRoutingModule } from "./recommendations-routing.module";
import { RecommendationsComponent } from "./recommendations.component";
import { SlickCarouselModule } from "ngx-slick-carousel";

@NgModule({
  declarations: [RecommendationsComponent],
  exports: [RecommendationsComponent],
  imports: [CommonModule, RecommendationsRoutingModule, SlickCarouselModule],
})
export class RecommendationsModule {}
