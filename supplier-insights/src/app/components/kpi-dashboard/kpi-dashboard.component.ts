import { Component, OnInit } from '@angular/core';

import * as echarts from 'echarts'

@Component({
  selector: 'app-kpi-dashboard',
  templateUrl: './kpi-dashboard.component.html',
  styleUrls: ['./kpi-dashboard.component.scss']
})
export class KpiDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initCharts();
  }

  initCharts(): void {
    this.initTopCategoriesChart();
    this.initTopProductsChart();
    this.initTopCustomersChart();
    this.initMarketShareByCategoryChart();
  }

  initTopCategoriesChart(): void {
    const chart: any = document.getElementById('top-categories-chart');
    const topCategoriesChart = echarts.init(chart);
    let option: any = {
      dataset: {
        source: [
          ['amount', 'product'],
          [58212, 'Matcha Latte'],
          [78254, 'Milk Tea'],
          [41032, 'Cheese Cocoa'],
          [12755, 'Cheese Brownie'],
          [20145, 'Matcha Cocoa'],
          [79146, 'Tea'],
          [91852, 'Orange Juice'],
          [101852, 'Lemon Juice'],
          [20112, 'Walnut Brownie']
        ]
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {containLabel: true, left: 0, right: 0, bottom: 0, top: 0},
      xAxis: {name: 'amount'},
      yAxis: {type: 'category', axisLabel: {rotate: 0, index: 999, inside: true}, data: [123,456,678,789,890,567,678], name: 'categories'},
      series: [
        {
          type: 'bar',
          encode: {
            // Map the "amount" column to X axis.
            x: 'amount',
            // Map the "product" column to Y axis
            y: 'product'
          },
          name: 'categories',
          data: [123,456,678,789,890,567,678]
         // label: {show: true}
        }
      ]
    };
    topCategoriesChart.setOption(option);
  }

  initTopProductsChart(): void {
    const chart: any = document.getElementById('top-products-chart');
    const topProductsChart: any = echarts.init(chart);
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['test1','test2','test3','test4','test5','all'],
        axisLabel: {rotate: 0}
      },
      series: [
        {
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        }
      ]
    };
    topProductsChart.setOption(option);
  }

  initTopCustomersChart(): void {
    const chart: any = document.getElementById('top-customers-chart');
    const topCustomersChart: any = echarts.init(chart);
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['test1','test2','test3','test4','test5','all'],
        axisLabel: {rotate: 0}
      },
      series: [
        {
          type: 'bar',
          data: [18203, 104970, 29034, 23489, 131744, 630230]
        }
      ]
    };
    topCustomersChart.setOption(option);
  }

  initMarketShareByCategoryChart(): void {
    const chart: any = document.getElementById('market-share-by-category-chart');
    const marketShareByCategoryChart: any = echarts.init(chart);
    let option = {
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        },
        /*formatter: function (params) {
          var tar;
          if (params[1].value != '-') {
            tar = params[1];
          }
          else {
            tar = params[0];
          }
          return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }*/
      },
      legend: {
        data:['data 1','data 2']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '3%',
        containLabel: true
      },
      xAxis: {
        type : 'category',
        splitLine: {show:false},
        data :  function (){
          var list = [];
          for (var i = 1; i <= 11; i++) {
            list.push(i + ' Nov');
          }
          return list;
        }()
      },
      yAxis: {
        type : 'value'
      },
      series: [
        {
          name: 'test',
          type: 'bar',
          stack: 'Total',
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
          stack: 'Total',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        },
        {
          name: 'data 2',
          type: 'bar',
          stack: 'Total',
          label: {
            normal: {
              show: true,
              position: 'bottom'
            }
          },
          data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
        }
      ]
    };
    marketShareByCategoryChart.setOption(option);

  }

}
