import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavBiblioRoutingModule } from './fav-biblio-routing.module';
import {FavBiblioComponent} from "./fav-biblio.component";
import { JwPaginationModule } from "jw-angular-pagination";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [FavBiblioComponent],
  imports: [
    CommonModule,
    FavBiblioRoutingModule,
    JwPaginationModule,
    MatButtonModule,
  ],
})
export class FavBiblioModule {}
