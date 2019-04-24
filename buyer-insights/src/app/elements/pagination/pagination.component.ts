import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'buyer-insights-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() totalItems: any;
  @Input() page: number;
  @Input() itemsPerPage: number;
  @Input() maxSize: number;
  @Input() isDropUp?: boolean;

  @Output() pageChanged = new EventEmitter<any>();
  @Output() setPageSize = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  changePage(event) {
    this.pageChanged.emit(event);
  }

  pageSizeChanged(number) {
    console.log(number)
    this.setPageSize.emit(number);
  }

}
