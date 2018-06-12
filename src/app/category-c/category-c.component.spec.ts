import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCComponent } from './category-c.component';

describe('CategoryCComponent', () => {
  let component: CategoryCComponent;
  let fixture: ComponentFixture<CategoryCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
