import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponentRoutingModule } from './search-component-routing.module';
import {SearchComponentComponent} from "./search-component.component";
import {ReactiveFormsModule} from "@angular/forms";
import {JwPaginationModule} from "jw-angular-pagination";


@NgModule({
  declarations: [SearchComponentComponent],
  imports: [
    CommonModule,
    SearchComponentRoutingModule,
    ReactiveFormsModule,
    JwPaginationModule,
  ],
  exports: [SearchComponentComponent],
})
export class SearchComponentModule {}
