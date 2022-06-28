import { ChangeDetectorRef, Component, Injector, ViewChild } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { ChartDataAdapter, ChartService, OChartComponent} from 'ontimize-web-ngx-charts';

declare var d3: any;
@Component({
  selector: 'app-subs-price',
  templateUrl: './subs-price.component.html',
  styleUrls: ['./subs-price.component.css']
})

export class SubsPriceComponent{

  @ViewChild('multiBar', {static: false})
  protected multiBar: OChartComponent;
  @ViewChild('multiBar2', {static: false})
  protected multiBar2: OChartComponent;

  nationalBranches: number;
  internationalBranches: number;
  prueba: any;
  prueba2: any;
  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef,
    protected injector: Injector
  ) {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('users'));
    const self = this;
    /* this.ontimizeService.query(void 0, ['user_'], 'subsPrice').subscribe(
      res => {
        if (res && res.data) {
          const factory = this.multiBar.getChartDataAdapterFactory();
          const adapter: ChartDataAdapter = factory.getAdapter('multiBar');
          const adaptedResult = adapter.adaptResult(res.data);
          console.log(self.prueba);
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    ); */
  }

  ngAfterViewInit() {
    this.formatdata();
    this.ontimizeService.query(void 0, ['user_'], 'subsPrice').subscribe(
      res => {
        if (res && res.data) {
          const factory = this.multiBar.getChartDataAdapterFactory();
          const adapter: ChartDataAdapter = factory.getAdapter('multiBar');
          const adaptedResult = adapter.adaptResult(res.data);
          this.prueba=adaptedResult;
          const factory2 = this.multiBar2.getChartDataAdapterFactory();
          const adapter2: ChartDataAdapter = factory2.getAdapter('multiBar');
          const adaptedResult2 = adapter2.adaptResult(res.data);
          this.prueba2=adaptedResult2;
          console.log(this.prueba);
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
  }
  formatdata(){
    if (this.multiBar) {
      let chartService: ChartService = this.multiBar.getChartService();
      if (chartService) {
        let chartOps = chartService.getChartOptions();

        // Configuring x axis...
        chartOps['xAxis']['tickFormat'] =
          function (d) {
            return d3.time.format('%m/%Y')(new Date(d));
          };
          chartOps['yAxis']['tickFormat'] = function (d) {
            return d3.format(',f')(d) + '€';
          };
      }
    }

    if (this.multiBar2) {
      let chartService: ChartService = this.multiBar2.getChartService();
      if (chartService) {
        let chartOps = chartService.getChartOptions();

        // Configuring x axis...
        chartOps['xAxis']['tickFormat'] =
          function (d) {
            return d3.time.format('%m/%Y')(new Date(d));
          };
          chartOps['yAxis']['tickFormat'] = function (d) {
            return d3.format(',f')(d) + '€';
          };
      }
    }
  }
}
/* export class BranchesCardComponent {
  nationalBranches: number;
  internationalBranches: number;
  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  ) {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('users'));
    const self = this;
    this.ontimizeService.query(void 0, ['COLUMNAS'], 'subsPrice').subscribe(
      res => {
        if (res && res.data) {
          self.nationalBranches = res.data.filter((e: any) => e['COUNTRY'] === 'Spain').length;
          self.internationalBranches = res.data.length - self.nationalBranches;
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
  }
} */
