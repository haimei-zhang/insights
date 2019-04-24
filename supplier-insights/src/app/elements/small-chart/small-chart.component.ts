import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

import * as echarts from 'echarts';

@Component({
  selector: 'supplier-insights-small-chart',
  templateUrl: './small-chart.component.html',
  styleUrls: ['./small-chart.component.scss']
})
export class SmallChartComponent implements OnInit, AfterViewInit {

  @Input() options = {
    title: 'Loading...',
    chartId: '',
    tooltipType: 'line',
    legend: {},
    xAxis: {},
    yAxis: {},
    series: []
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initChart();
  }

  initChart(): void {
    const chart: any = document.getElementById(this.options.chartId);
    const eCharts: any = echarts.init(chart);
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: this.options.tooltipType
        }
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '3%',
        containLabel: true
      },
      xAxis: this.options.xAxis,
      yAxis: this.options.yAxis,
      series: this.options.series
    };
    eCharts.setOption(option);
  }

}
