import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'supplier-insights-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  @Input() title: string;
  @Input() minHeight: string;
  @Input() items: any;

  constructor() { }

  ngOnInit() {
  }

}
