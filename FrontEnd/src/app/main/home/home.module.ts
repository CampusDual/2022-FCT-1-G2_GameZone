import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {RankingModule} from "../ranking/ranking.module";

@NgModule({
    imports: [
        SharedModule,
        OntimizeWebModule,
        HomeRoutingModule,
        RankingModule
    ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
