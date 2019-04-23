import { Component, OnInit } from '@angular/core';

import * as echarts from 'echarts';

@Component({
  selector: 'supplier-insights-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss']
})
export class PurchaseOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initChart();
  }

  initChart(): void {
    this.initWeeklyOrderValueChart();
  }

  initWeeklyOrderValueChart(): void {
    const chart: any = document.getElementById('weekly-order-value-chart');
    const weeklyOrderValueChart: any = echarts.init(chart);
    let option = {
      legend: {data: ['Completed', 'Pending']},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line'
        }
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        name: 'order value',
        type: 'value'
      },
      series: [{
        name: 'Completed',
        data: [820, 932, 901, 934, 1290, 1330, 1320, 343, 537, 346, 344, 245],
        type: 'line'
      },
        {
          name: 'Pending',
          data: [123, 55, 666, 789, 456, 234, 555, 475, 358, 864, 222, 647],
          type: 'line'
        }]
    };
    weeklyOrderValueChart.setOption(option);
  }

}
