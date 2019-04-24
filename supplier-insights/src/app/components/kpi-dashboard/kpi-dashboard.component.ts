import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpi-dashboard',
  templateUrl: './kpi-dashboard.component.html',
  styleUrls: ['./kpi-dashboard.component.scss']
})
export class KpiDashboardComponent implements OnInit {

  minHeight = '180px';

  constructor() { }

  ngOnInit() {
  }

  initTopCategoriesChart(): any {
    return {
      title: 'Top Categories',
      height: '210px',
      chartId: 'top-categories-chart',
      yAxis: ['test1','test2','test3','test4','test5','all'],
      series: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]
    };
  }

  initTopProductsChart(): any {
    return {
      title: 'Top Products',
      chartId: 'top-products-chart',
      height: '210px',
      yAxis: ['test1','test2','test3','test4','test5','all'],
      series: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]
    };
  }

  initTopCustomersChart(): any {
    return {
      title: 'Top Customers',
      chartId: 'top-customers-chart',
      height: '210px',
      yAxis: ['test1','test2','test3','test4','test5','all'],
      series: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]
    };
  }

  initMarketShareByCategoryChart(): any {
    return {
      title: 'Market Share by Category',
      chartId: 'market-share-by-category-chart',
      height: '210px',
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

  initWeeklyOrderValueChart(): any {
    return {
      title: 'Weekly Order Value - Completed Orders',
      chartId: 'weekly-order-value-chart',
      height: '400px',
      legend: ['This Year', 'Last Year'],
      xAxis: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [{
        name: 'This Year',
        data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
        type: 'line'
      },
        {
          name: 'Last Year',
          data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
          type: 'line'
        }]
    };
  }

  initPurchaseOrdersTable(): any {
    return [{status: 'Completed', count: 71, amount: 3226338.15, variance: '4827.61%'},
      {status: 'Pending', count: 71, amount: 3226338.15, variance: '4827.61%'}];
  }

  initOnOffCatalogueOrdersTable(): any {
    return [{status: 'On Catalogue', count: 71, amount: 3226338.15, variance: '4827.61%'},
      {status: 'Off Catalogue', count: 71, amount: 3226338.15, variance: '4827.61%'}];
  }

  initInvoiceTable(): any {
    return [{status: 'Created', count: 71, amount: 3226338.15, variance: '4827.61%'},
      {status: 'Sent', count: 71, amount: 3226338.15, variance: '4827.61%'},
      {status: 'Rejected', count: 71, amount: 3226338.15, variance: '4827.61%'}];
  }

}
