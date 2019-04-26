import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'buyer-insights-kpi-dashboard',
  templateUrl: './kpi-dashboard.component.html',
  styleUrls: ['./kpi-dashboard.component.scss']
})
export class KpiDashboardComponent implements OnInit, AfterViewInit {
  weeklyOrdersData: any;
  topSpendCategories = {
    name: 'topSpendCategories',
    data: [
      ['Syringe Needles', 217411],
      ['Standard', 67455],
      ['Primary Antibodies', 48176],
      ['Delivery Charges', 21200],
      ['Weatherproof Jackets', 13240]
    ],
    columns: ['Category', 'Spend']
  }
  topSpendProducts = {
    name: 'topSpendProducts',
    data: [
      ['Spinal Needle', 217411],
      ['LED Torch', 67455],
      ['MDR-1', 48176],
      ['Delivery Charges', 21200],
      ['Arco Product', 13240]
    ],
    columns: ['Product', 'Spend']
  }
  topSpendSuppliers = {
    name: 'topSpendSuppliers',
    data: [
      ['Future Testing Supplier', 403857],
      ['Fisher Scientific', 17500],
      ['Arco', 14700],
      ['Sigma', 350],
      ['Blackwell', 0]
    ],
    columns: ['Supplier', 'Spend']
  };
  topSpendBusinessUnits = {
    name: 'topSpendBusinessUnits',
    data: [
      ['Regression Zelease Basket Test Company', 403857],
      ['Regression Zelease BU1', 17500]
    ],
    columns: ['Business Unit', 'Spend']
  };

  purchaseOrderData = [
    {
      status: 'Completed',
      count: '198',
      amount: '436,498.12',
      variance: null
    },
    {
      status: 'Pending',
      count: '78',
      amount: '212,298.73',
      variance: null
    }
  ];
  catalogueOrderData = [
    {
      status: 'On Catalogue',
      count: '101',
      amount: '392,071.01',
      variance: null
    },
    {
      status: 'Off Catalogue',
      count: '97',
      amount: '44,357.89',
      variance: null
    }
  ];
  invoiceData = [
    {
      status: 'Received',
      count: '19',
      amount: '33,874.12',
      variance: null
    },
    {
      status: 'Rejected',
      count: '36',
      amount: '637.50',
      variance: null
    }
  ];

  constructor() { }

  ngOnInit() { 
    this.initCharts();
  }

  ngAfterViewInit() {
    
  }

  initCharts(): void {
    this.initBarChart(this.topSpendCategories.name, this.topSpendCategories.data, this.topSpendCategories.columns);
    this.initBarChart(this.topSpendProducts.name, this.topSpendProducts.data, this.topSpendProducts.columns);
    this.initBarChart(this.topSpendSuppliers.name, this.topSpendSuppliers.data, this.topSpendSuppliers.columns);
    this.initBarChart(this.topSpendBusinessUnits.name, this.topSpendBusinessUnits.data, this.topSpendBusinessUnits.columns);
    this.initWeeklyOrdersChart();
  }

  initBarChart(obj: string, data: any, cols: String[]): void {
    this[obj] = {
      type: 'BarChart',
      data: data,
      cols: cols,
      options: {
        animation: {
          startup: true,
          duration: 1000,
          easing: 'out',
        },
        colors: ['#009fdf'],
        bar: {
          groupWidth: '90%'
        },
        theme: {
          chartArea: {height: '80%'},
          titlePosition: 'in'
        }
      }
    }
  }

  initWeeklyOrdersChart() {
    this.weeklyOrdersData = {
      data: [
        ["Jan",  0],
        ["Feb",  0],
        ["Mar",  0],
        ["Apr",  110000],
        ["May",  165000],
        ["Jun",  32000],
        ["Jul",  0],
        ["Aug",  126000],
        ["Sep",  3200],
        ["Oct",  0],
        ["Nov",  78000],
        ["Dec",  320]
      ],
      columnNames: ["Month", "Order Value"],
      options: {   
        hAxis: {
          title: 'Month'
        },
        vAxis:{
          title: 'Order Value'
        },
        animation: {
          startup: true,
          duration: 1000,
          easing: 'out',
        },
        colors: ['#e0440e'],
        chartArea: {
          backgroundColor: '#e8e8e8'
        },
        theme: {
          chartArea: {width: '100%', height: '100%'},
          legend: {position: 'in'},
          titlePosition: 'in', axisTitlesPosition: 'in',
          hAxis: {textPosition: 'in'}, vAxis: {textPosition: 'in'}
        }
      }
    }
  }
}
