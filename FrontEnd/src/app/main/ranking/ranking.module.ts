import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RankingRoutingModule } from "./ranking-routing.module";
import { RankingComponent } from "./ranking.component";

@NgModule({
  declarations: [RankingComponent],
  exports: [RankingComponent],
  imports: [CommonModule, RankingRoutingModule, SlickCarouselModule],
})
export class RankingModule {}
