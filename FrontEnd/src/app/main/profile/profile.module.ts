
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SummaryModule } from './summary/summary.module';
import { SlickCarouselModule } from "ngx-slick-carousel";


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SummaryModule,
    CommonModule,
    ProfileRoutingModule,
    SlickCarouselModule,

  ],
  exports: [ProfileComponent],
})
export class ProfileModule {}
