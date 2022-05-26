import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DevExtremeModule, DxChartModule} from 'devextreme-angular';
import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent } from './ranking.component';




@NgModule({
    declarations: [RankingComponent],
    exports: [
        RankingComponent
    ],
    imports: [
        CommonModule,
        RankingRoutingModule,
        DxChartModule,
        DevExtremeModule,
    ]
})
export class RankingModule { }
