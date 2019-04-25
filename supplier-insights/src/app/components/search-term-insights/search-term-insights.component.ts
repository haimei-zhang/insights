import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'supplier-insights-search-term-insights',
  templateUrl: './search-term-insights.component.html',
  styleUrls: ['./search-term-insights.component.scss']
})
export class SearchTermInsightsComponent implements OnInit {

  minHeight = '210px';
  constructor() { }

  ngOnInit() {
  }

  initWeeklySearchesChart(): any {
    return {
      title: 'Weekly Searches containing "Pen"',
      chartId: 'weekly-searches-chart',
      height: '400px',
      legend: ['All Searches', 'Searches that returned your products', 'Searches where your product was first'],
      xAxis: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [{
        name: 'All Searches',
        stack: 'total',
        areaStyle: {},
        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
        type: 'line'
      },
        {
          name: 'Searches that returned your products',
          data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
          areaStyle: {},
          stack: 'total',
          type: 'line'
        },
        {
          name: 'Searches where your product was first',
          data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
          areaStyle: {},
          stack: 'total',
          type: 'line'
        }]
    };
  }

}
