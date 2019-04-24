import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'supplier-insights-on-off-catalogue-orders',
  templateUrl: './on-off-catalogue-orders.component.html',
  styleUrls: ['./on-off-catalogue-orders.component.scss']
})
export class OnOffCatalogueOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  initWeeklyOrderValueChart(): any {
    return {
      title: 'Weekly Order Value - On / Off Catalogue',
      chartId: 'weekly-order-value-chart',
      height: '400px',
      legend: ['On Catalogue', 'Off Catalogue'],
      xAxis: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [{
        name: 'On Catalogue',
        data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
        type: 'line'
      },
        {
          name: 'Off Catalogue',
          data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
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
