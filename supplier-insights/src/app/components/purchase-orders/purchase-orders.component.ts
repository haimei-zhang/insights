import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'supplier-insights-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss']
})
export class PurchaseOrdersComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  initWeeklyOrderValueChart(): any {
    return {
      title: 'Weekly Order Value - Completed / Pending',
      chartId: 'weekly-order-value-chart',
      height: '400px',
      legend: ['Completed', 'Pending'],
      xAxis: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
  }

  changePage(page, execute): void {
    console.log(page);
  }

  setPageSize(page): void {
    console.log(page)
  }

}
