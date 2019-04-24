import { Component, OnInit } from '@angular/core';
import * as echarts from "echarts";

@Component({
  selector: 'supplier-insights-on-off-catalogue-orders',
  templateUrl: './on-off-catalogue-orders.component.html',
  styleUrls: ['./on-off-catalogue-orders.component.scss']
})
export class OnOffCatalogueOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initChart();
  }

  initChart(): void {
    this.initWeeklyOrderValueChart();
  }

  initWeeklyOrderValueChart(): any {
    return {
      title: 'Weekly Order Value - On / Off Catalogue',
      chartId: 'weekly-order-value-chart',
      legend: {data: ['On Catalogue', 'Off Catalogue']},
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        name: 'order value',
        type: 'value'
      },
      series: [{
        name: 'On Catalogue',
        data: [820, 932, 901, 934, 1290, 1330, 1320, 343, 537, 346, 344, 245],
        type: 'line'
      },
        {
          name: 'Off Catalogue',
          data: [123, 55, 666, 789, 456, 234, 555, 475, 358, 864, 222, 647],
          type: 'line'
        }]
    };
  }

  changePage(page, execute): void {
    console.log(page);
  }

  setPageSize(page): void {
    console.log(page)
  }

}
