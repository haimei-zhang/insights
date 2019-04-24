import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTermInsightsComponent } from './search-term-insights.component';

describe('SearchTermInsightsComponent', () => {
  let component: SearchTermInsightsComponent;
  let fixture: ComponentFixture<SearchTermInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTermInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTermInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
