import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buyer-insights-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss']
})
export class PurchaseOrdersComponent implements OnInit {
  weeklyOrdersData: any;
  purchaseOrderData = [
    {date: '2019/04/23', supplierComp: 'Fisher Scientific Ltd.', supplierEmail: 'test@email.com', num: 1556025026895, val: '4,107.90', status: 'Completed', invNum: 123, link: 'https://www.test.com/'},
    {date: '2019/04/23', supplierComp: 'Fisher Scientific Ltd.', supplierEmail: 'test@email.com', num: 1556025026895, val: '4,107.90', status: 'Completed', invNum: 123, link: 'https://www.test.com/'},
    {date: '2019/04/23', supplierComp: 'Fisher Scientific Ltd.', supplierEmail: 'test@email.com', num: 1556025026895, val: '4,107.90', status: 'Completed', invNum: 123, link: 'https://www.test.com/'},
    {date: '2019/04/23', supplierComp: 'Fisher Scientific Ltd.', supplierEmail: 'test@email.com', num: 1556025026895, val: '4,107.90', status: 'Completed', invNum: 123, link: 'https://www.test.com/'},
    {date: '2019/04/23', supplierComp: 'Fisher Scientific Ltd.', supplierEmail: 'test@email.com', num: 1556025026895, val: '4,107.90', status: 'Completed', invNum: 123, link: 'https://www.test.com/'},
    {date: '2019/04/23', supplierComp: 'Fisher Scientific Ltd.', supplierEmail: 'test@email.com', num: 1556025026895, val: '4,107.90', status: 'Completed', invNum: 123, link: 'https://www.test.com/'},
    {date: '2019/04/23', supplierComp: 'Fisher Scientific Ltd.', supplierEmail: 'test@email.com', num: 1556025026895, val: '4,107.90', status: 'Completed', invNum: 123, link: 'https://www.test.com/'},
    {date: '2019/04/23', supplierComp: 'Fisher Scientific Ltd.', supplierEmail: 'test@email.com', num: 1556025026895, val: '4,107.90', status: 'Completed', invNum: 123, link: 'https://www.test.com/'},
    {date: '2019/04/23', supplierComp: 'Fisher Scientific Ltd.', supplierEmail: 'test@email.com', num: 1556025026895, val: '4,107.90', status: 'Completed', invNum: 123, link: 'https://www.test.com/'},
    {date: '2019/04/23', supplierComp: 'Fisher Scientific Ltd.', supplierEmail: 'test@email.com', num: 1556025026895, val: '4,107.90', status: 'Completed', invNum: 123, link: 'https://www.test.com/'},
    {date: '2019/04/23', supplierComp: 'Fisher Scientific Ltd.', supplierEmail: 'test@email.com', num: 1556025026895, val: '4,107.90', status: 'Completed', invNum: 123, link: 'https://www.test.com/'},
    {date: '2019/04/23', supplierComp: 'Fisher Scientific Ltd.', supplierEmail: 'test@email.com', num: 1556025026895, val: '4,107.90', status: 'Completed', invNum: 123, link: 'https://www.test.com/'}
  ]

  constructor() { }

  ngOnInit() {
    this.initWeeklyOrdersChart();
  }

  initWeeklyOrdersChart() {
    this.weeklyOrdersData = {
      data: [
        ["Jan",  0, 0],
        ["Feb",  0, 300],
        ["Mar",  0, 1200],
        ["Apr",  110000, 17000],
        ["May",  165000, 0],
        ["Jun",  32000, 890],
        ["Jul",  0, 1200],
        ["Aug",  126000, 2000],
        ["Sep",  3200, 7800],
        ["Oct",  0, 240],
        ["Nov",  78000, 1800],
        ["Dec",  320, 0]
      ],
      columnNames: ["Month", "Completed", "Pending"],
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
        colors: ['#00823b', '#e0440e', '#888'],
        chartArea: {
          backgroundColor: '#e8e8e8'
        },
        theme: {
          titlePosition: 'in'
        }
      }
    }
  }

}
