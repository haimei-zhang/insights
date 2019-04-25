import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as echarts from "echarts";

@Component({
  selector: 'supplier-insights-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, AfterViewInit {

  @Input() options = {
    title: 'Loading...',
    height: '400px',
    chartId: '',
    legend: [],
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
        trigger: 'item',
        formatter: "{b}: <br/> {c} ({d}%)"
      },
      toolbox: {
        feature: {
          saveAsImage: {title: 'Save'}
        },
        bottom: 0
      },
      legend: {
        orient: 'horizontal',
        x: 'left',
        // bottom: 0,
        data: this.options.legend
      },
      series: [
        {
          name: this.options.title,
          type:'pie',
          center: ['50%', '65%'],
          radius: ['25%', '70%'],
          // avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '18',
                fontWeight: 'bold'
              },
              formatter: '{d}%'
            }
          },
          data: this.options.series
        }
      ]
    };
    eCharts.setOption(option);
  }

}
