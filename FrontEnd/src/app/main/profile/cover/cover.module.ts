import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverRoutingModule } from './cover-routing.module';
import { CoverComponent } from './cover.component';


@NgModule({
  declarations: [CoverComponent],
   exports: [CoverComponent],
  imports: [
    CommonModule,
    CoverRoutingModule
  ]
})
export class CoverModule { }
