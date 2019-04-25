import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'supplier-insights-list-price-discount',
  templateUrl: './list-price-discount.component.html',
  styleUrls: ['./list-price-discount.component.scss']
})
export class ListPriceDiscountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  initListPriceDiscountByCustomerChart(): any {
    return {
      title: 'List Price Discount By Customer',
      height: '210px',
      chartId: 'list-price-discount-by-customer-chart',
      yAxis: ['test1','test2','test3','test4','test5','all'],
      series: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
    };
  }

  initListPriceDiscountByCategoryChart(): any {
    return {
      title: 'List Price Discount By Category',
      height: '210px',
      chartId: 'list-price-discount-by-category-chart',
      yAxis: ['test1','test2','test3','test4','test5','all'],
      series: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
    };
  }

  initListPriceDiscountByProductChart(): any {
    return {
      title: 'List Price Discount By Product',
      height: '210px',
      chartId: 'list-price-discount-by-product-chart',
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
