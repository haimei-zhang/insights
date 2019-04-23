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
  }

  initTopCategoriesChart(): void {
    const chart:any = document.getElementById('top-categories-chart');
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
    const chart:any = document.getElementById('top-products-chart');
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
    const chart:any = document.getElementById('top-customers-chart');
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

}
