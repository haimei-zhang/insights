import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigChartComponent } from './big-chart.component';

describe('BigChartComponent', () => {
  let component: BigChartComponent;
  let fixture: ComponentFixture<BigChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
