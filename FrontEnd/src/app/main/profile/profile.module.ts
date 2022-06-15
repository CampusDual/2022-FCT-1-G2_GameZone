import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";
import { SummaryComponent } from "./summary/summary.component";
import { CoverModule } from "./cover/cover.module";
import { SlickCarouselModule } from "ngx-slick-carousel";


@NgModule({
  declarations: [
    ProfileComponent,
    SummaryComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CoverModule,
    SlickCarouselModule,
  ],
  exports: [ProfileComponent],
})
export class ProfileModule {}
