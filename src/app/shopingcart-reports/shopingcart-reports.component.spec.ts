import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingcartReportsComponent } from './shopingcart-reports.component';

describe('ShopingcartReportsComponent', () => {
  let component: ShopingcartReportsComponent;
  let fixture: ComponentFixture<ShopingcartReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingcartReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingcartReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
