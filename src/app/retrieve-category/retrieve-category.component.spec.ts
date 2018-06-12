import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RetrieveCategoryComponent } from './retrieve-category.component';

describe('RetrieveCategoryComponent', () => {
  let component: RetrieveCategoryComponent;
  let fixture: ComponentFixture<RetrieveCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
