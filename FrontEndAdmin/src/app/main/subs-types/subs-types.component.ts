import { ChangeDetectorRef, Component, Injector, ViewChild } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { ChartDataAdapter, ChartService, OChartComponent} from 'ontimize-web-ngx-charts';

declare var d3: any;

@Component({
  selector: 'app-subs-types',
  templateUrl: './subs-types.component.html',
  styleUrls: ['./subs-types.component.css']
})

export class SubsTypesComponent {
  @ViewChild('multiBar', {static: false})
  protected multiBar: OChartComponent;

  nationalBranches: number;
  internationalBranches: number;
  prueba: any;
  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef,
    protected injector: Injector
  ) {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('users'));
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
      }
    }
  }
}

