import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'supplier-insights-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.scss']
})
export class TopCategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  initTopCategoriesByOrderValueChart(): any {
    return {
      title: 'Weekly Invoice Value - Sent / Rejected',
      chartId: 'weekly-invoice-value-chart',
      legend: {data: ['Invoices Sent', 'Invoices Rejected']},
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        name: 'order value',
        type: 'value'
      },
      series: [{
        name: 'Invoices Sent',
        data: [820, 932, 901, 934, 1290, 1330, 1320, 343, 537, 346, 344, 245],
        type: 'line'
      },
        {
          name: 'Invoices Rejected',
          data: [123, 55, 666, 789, 456, 234, 555, 475, 358, 864, 222, 647],
          type: 'line'
        }]
    };
  }

  initTopCategoriesByOrderLinesChart(): any {
    return {
      title: 'Weekly Invoice Value - Sent / Rejected',
      chartId: 'weekly-invoice-value-chart',
      legend: {data: ['Invoices Sent', 'Invoices Rejected']},
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        name: 'order value',
        type: 'value'
      },
      series: [{
        name: 'Invoices Sent',
        data: [820, 932, 901, 934, 1290, 1330, 1320, 343, 537, 346, 344, 245],
        type: 'line'
      },
        {
          name: 'Invoices Rejected',
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
