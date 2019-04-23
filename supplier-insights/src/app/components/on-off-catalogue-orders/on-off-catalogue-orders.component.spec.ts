import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnOffCatalogueOrdersComponent } from './on-off-catalogue-orders.component';

describe('OnOffCatalogueOrdersComponent', () => {
  let component: OnOffCatalogueOrdersComponent;
  let fixture: ComponentFixture<OnOffCatalogueOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnOffCatalogueOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnOffCatalogueOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
