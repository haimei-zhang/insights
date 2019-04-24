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
      chartId: 'top-categories-chart',
      tooltipType: 'shadow',
      xAxis: {type: 'value',},
      yAxis: {type: 'category', data: [123,456,678,789,890,567,678]},
      series: [{
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230, 98756]
      }]
    };
  }

  initTopProductsChart(): any {
    return {
      title: 'Top Products',
      chartId: 'top-products-chart',
      tooltipType: 'shadow',
      xAxis: {type: 'value'},
      yAxis: {type: 'category', data: ['test1','test2','test3','test4','test5','all']},
      series: [{
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230]
      }]
    };
  }

  initTopCustomersChart(): any {
    return {
      title: 'Top Customers',
      chartId: 'top-customers-chart',
      tooltipType: 'shadow',
      xAxis: {type: 'value'},
      yAxis: {type: 'category', data: ['test1','test2','test3','test4','test5','all']},
      series: [{
        type: 'bar',
        data: [18203, 104970, 29034, 23489, 131744, 630230]
      }]
    };
  }

  initMarketShareByCategoryChart(): any {
    return {
      title: 'Market Share by Category',
      chartId: 'market-share-by-category-chart',
      tooltipType: 'shadow',
      legend: {
        data: ['data 1','data 2']
      },
      xAxis: {
        type : 'category',
        splitLine: {show:false},
        data :  function (){
          let list = [];
          for (let i = 1; i <= 11; i++) {
            list.push(i + ' Nov');
          }
          return list;
        }()
      },
      yAxis: {type: 'value'},
      series: [
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
      legend: {data: ['This Year', 'Last Year']},
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'This Year',
        data: [820, 932, 901, 934, 1290, 1330, 1320, 343, 537, 346, 344, 245],
        type: 'line'
      },
        {
          name: 'Last Year',
          data: [123, 55, 666, 789, 456, 234, 555, 475, 358, 864, 222, 647],
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
