import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {MediaComponent, SafePipe} from "./media.component";


@NgModule({
  declarations: [MediaComponent, SafePipe],
  exports: [MediaComponent],
  imports: [
    CommonModule,
    MediaRoutingModule,
    SlickCarouselModule
  ]
})
export class MediaModule { }
