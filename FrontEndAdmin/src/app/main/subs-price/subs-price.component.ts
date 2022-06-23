import { Component, OnInit } from '@angular/core';
import { MultiBarChartConfiguration} from 'ontimize-web-ngx-charts';
import { D3LocaleService } from 'src/app/shared/d3-locale/d3Locale.service';

@Component({
  selector: 'app-subs-price',
  templateUrl: './subs-price.component.html',
  styleUrls: ['./subs-price.component.css']
})
export class SubsPriceComponent implements OnInit {

  public movementTypesChartParams: MultiBarChartConfiguration;


  constructor(
    private d3LocaleService: D3LocaleService
  ) {
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this._configureMultiBar(d3Locale);
   }

  ngOnInit() {
  }

  private _configureMultiBar(locale: any): void {
    this.movementTypesChartParams = new MultiBarChartConfiguration();
    this.movementTypesChartParams.margin.top = 0;
    this.movementTypesChartParams.margin.right = 0;
    this.movementTypesChartParams.margin.bottom = 0;
    this.movementTypesChartParams.margin.left = 0;

    this.movementTypesChartParams.legend.vers = 'furious';
  }

}
