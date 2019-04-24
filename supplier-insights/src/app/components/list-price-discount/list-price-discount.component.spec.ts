import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPriceDiscountComponent } from './list-price-discount.component';

describe('ListPriceDiscountComponent', () => {
  let component: ListPriceDiscountComponent;
  let fixture: ComponentFixture<ListPriceDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPriceDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPriceDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
