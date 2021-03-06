import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as echarts from "echarts";

@Component({
  selector: 'supplier-insights-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, AfterViewInit {

  @Input() options = {
    title: 'Loading...',
    height: '400px',
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
          type: 'line'
        }
      },
      toolbox: {
        top: '5%',
        feature: {
          magicType: {show: true, type: ['line', 'bar'], title: {line: 'Line Chart', bar: 'Bar Chart'}},
          restore: {title: 'Restore'},
          saveAsImage: {title: 'Save'}
        }
      },
      legend: {data: this.options.legend, icon: 'roundRect'},
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {type: 'category', data: this.options.xAxis},
      yAxis: {
        type: 'value'
      },
      series: this.options.series
    };
    eCharts.setOption(option);
  }

}
