import { Component, Injector, ViewChild } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { ChartService, OChartComponent} from 'ontimize-web-ngx-charts';

declare var d3: any;
@Component({
  selector: 'app-subs-price',
  templateUrl: './subs-price.component.html',
  styleUrls: ['./subs-price.component.css']
})

export class SubsPriceComponent{

  @ViewChild('multiBar', {static: false})
  protected multiBar: OChartComponent;

  protected yAxis: string = 'MOVEMENT';
  protected xAxis: string = 'DATE_';

  protected data: Array<Object>;

  constructor(protected injector: Injector) {  }

  ngAfterViewInit() {

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


        // Configuring y axis...
        var yScale = d3.scale.linear();
        chartOps['yScale'] = yScale;
        chartOps['yDomain'] = [-1000, 6000];
      }
    }

    // Ontimize service query...
    let service: OntimizeService = this.injector.get(OntimizeService);
    let conf = service.getDefaultServiceConfiguration();
    conf['entity'] = 'EMovements';
    service.configureService(conf);

    let filter = {
      'ACCOUNTID': 7310
    }
    service.query(filter, []).subscribe((resp) => {
      if (resp.code === 0) {
        this.adaptResult(resp.data);
      }
    });
  }

  adaptResult(data: Array<any>) {
    if (data && data.length) {
      let values = this.processValues(data);
      this.data = [
        {
          'key': 'Movement',
          'values': values['movement'],
          'color': '#3498db'
        },
        {
          'key': 'Average Balance',
          'values': values['average'],
          'color': '#e74c3c'
        },
        {
          'key': 'Total Balance',
          'values': values['total'],
          'color': '#f9c922'
        }
      ];
    }
  }

  processValues(data: Array<Object>): Object {
    let values = {
      'movement': [],
      'average': [],
      'total': []
    };
    var self = this;
    let balance = 0.0;
    let average = 0.0;
    data.forEach((item: any, index: number) => {
      let val = {
        'x': item[self.xAxis],
        'y': item[self.yAxis]
      };

      balance += val.y;
      let val2 = {
        'x': val.x,
        'y': balance
      };

      average += balance;
      let val3 = {
        'x': val.x,
        'y': (average / (index + 1))
      };

      values['movement'].push(val);
      values['average'].push(val3);
      values['total'].push(val2);
    });
    return values;
  }

}

