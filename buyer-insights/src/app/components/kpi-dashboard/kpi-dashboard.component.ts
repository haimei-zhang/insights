import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buyer-insights-kpi-dashboard',
  templateUrl: './kpi-dashboard.component.html',
  styleUrls: ['./kpi-dashboard.component.scss']
})
export class KpiDashboardComponent implements OnInit {

  chart1: any;

  constructor() { }

  ngOnInit() {
    this.initCharts();
  }

  initCharts(): void {
    this.initBarChart();
  }

  initBarChart(): void {
    this.chart1 = {
      type: 'BarChart',
      data: [
        ['London', 8136000],
        ['New York', 8538000],
        ['Paris', 2244000],
        ['Berlin', 3470000],
        ['Kairo', 19500000]
      ],
      cols: [
        'City',
        'Population'
      ],
      options: {
        animation: {
          startup: true,
          duration: 1000,
          easing: 'out',
        },
        colors: ['#e0440e'],
        bar: {
          groupWidth: '90%'
        }
      }
    }
  }

}
