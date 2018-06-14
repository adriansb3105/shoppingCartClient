import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByNameComponent } from './products-by-name.component';

describe('ProductsByNameComponent', () => {
  let component: ProductsByNameComponent;
  let fixture: ComponentFixture<ProductsByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
