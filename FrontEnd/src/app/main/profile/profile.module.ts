import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MediaComponent } from './media/media.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { SummaryComponent } from './summary/summary.component';
import { CoverModule } from './cover/cover.module';



@NgModule({
  declarations: [ProfileComponent, ReviewsComponent, MediaComponent, RecommendationsComponent, SummaryComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CoverModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
