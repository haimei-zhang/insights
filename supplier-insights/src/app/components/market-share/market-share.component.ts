import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'supplier-insights-market-share',
  templateUrl: './market-share.component.html',
  styleUrls: ['./market-share.component.scss']
})
export class MarketShareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  initMarketShareByCategoryChart(): any {
    return {
      title: 'Market Share by Category',
      chartId: 'market-share-by-category-chart',
      height: '400px',
      legend: ['data 1','data 2'],
      xAxis: (() => {
        let list = [];
        for (let i = 1; i <= 11; i++) {
          list.push(i + ' Nov');
        }
        return list;
      })(),
      series:[
        {
          name: 'Total',
          type: 'bar',
          stack: 'total',
          itemStyle: {
            normal: {
              barBorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)'
            },
            emphasis: {
              barBorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)'
            }
          },
          data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        },
        {
          name: 'data 1',
          type: 'bar',
          stack: 'total',
          data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        },
        {
          name: 'data 2',
          type: 'bar',
          stack: 'total',
          data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
        }
      ]
    };
  }

  changePage(page, execute): void {
    console.log(page);
  }

  setPageSize(page): void {
    console.log(page)
  }

}
