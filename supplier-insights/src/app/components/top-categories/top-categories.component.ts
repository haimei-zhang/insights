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
      title: 'Top Categories by Order Value',
      height: '400px',
      chartId: 'top-categories-by-order-value-chart',
      yAxis: ['test1','test2','test3','test4','test5','all'],
      series: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]
    };
  }

  initTopCategoriesByOrderLinesChart(): any {
    return {
      title: 'Top Categories by Order Lines',
      height: '400px',
      chartId: 'top-categories-by-order-lines-chart',
      yAxis: ['test1','test2','test3','test4','test5','all'],
      series: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]
    };
  }

  changePage(page, execute): void {
    console.log(page);
  }

  setPageSize(page): void {
    console.log(page)
  }
}
