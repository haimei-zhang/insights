import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'supplier-insights-top-customers',
  templateUrl: './top-customers.component.html',
  styleUrls: ['./top-customers.component.scss']
})
export class TopCustomersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  initTopCustomersByOrderValueChart(): any {
    return {
      title: 'Top Customers by Order Value',
      height: '400px',
      chartId: 'top-customers-by-order-value-chart',
      yAxis: ['test1','test2','test3','test4','test5','all'],
      series: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
    };
  }

  initTopCustomersByOrderLinesChart(): any {
    return {
      title: 'Top Customers by Purchase Orders',
      height: '400px',
      chartId: 'top-customers-by-purchase-orders-chart',
      yAxis: ['test1','test2','test3','test4','test5','all'],
      series: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
    };
  }

  changePage(page, execute): void {
    console.log(page);
  }

  setPageSize(page): void {
    console.log(page)
  }

}
