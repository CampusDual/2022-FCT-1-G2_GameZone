import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {RankingModule} from "../ranking/ranking.module";
import {FeedModule} from "../feed/feed.module";
import {RecommendationsModule} from "../recommendations/recommendations.module";

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HomeRoutingModule,
    RankingModule,
    FeedModule,
    RecommendationsModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
