import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as echarts from "echarts";

@Component({
  selector: 'supplier-insights-stack-bar-chart',
  templateUrl: './stack-bar-chart.component.html',
  styleUrls: ['./stack-bar-chart.component.scss']
})
export class StackBarChartComponent implements OnInit, AfterViewInit {

  @Input() options = {
    title: 'Loading...',
    height: '210px',
    chartId: '',
    legend: [],
    xAxis: [],
    series: []
  };

  @Input() datePeriod: string;

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
          type: 'shadow'
        }
      },
      toolbox: {
        feature: {
          magicType: {show: true, type: ['line', 'bar','stack', 'tiled'], title: {line: 'Line Chart', bar: 'Bar Chart', stack: 'Stack Chart', tiled: 'Tiled Chart'}},
          restore: {title: 'Restore'},
          saveAsImage: {title: 'Save'}
        }
      },
      legend: {data: this.options.legend},
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type : 'category',
        splitLine: {show: false},
        data: this.options.xAxis},
      yAxis: {type: 'value'},
      series: this.options.series
    };
    eCharts.setOption(option);
  }

}
