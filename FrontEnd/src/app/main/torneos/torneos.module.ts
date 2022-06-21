import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TorneosRoutingModule } from './torneos-routing.module';
import { TorneosComponent } from './torneos.component';


@NgModule({
  declarations: [TorneosComponent],
  imports: [
    CommonModule,
    TorneosRoutingModule
  ]
})
export class TorneosModule { }
