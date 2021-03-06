import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'supplier-insights-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss']
})
export class TopProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  initTopProductsByOrderValueChart(): any {
    return {
      title: 'Top Products by Order Value',
      height: '210px',
      chartId: 'top-products-by-order-value-chart',
      yAxis: ['test1','test2','test3','test4','test5','all'],
      series: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
    };
  }

  initTopProductsByOrderLinesChart(): any {
    return {
      title: 'Top Products by Order Lines',
      height: '210px',
      chartId: 'top-products-by-order-lines-chart',
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
