import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";
import { CoverModule } from "./cover/cover.module";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { MediaModule } from "./media/media.module";
import { ReviewsModule } from "./reviews/reviews.module";
import { RecommendationsModule } from "../recommendations/recommendations.module";
import {SummaryModule} from "./summary/summary.module";

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CoverModule,
    SlickCarouselModule,
    MediaModule,
    ReviewsModule,
    RecommendationsModule,
    SummaryModule
  ],
  exports: [ProfileComponent],
})
export class ProfileModule {}
