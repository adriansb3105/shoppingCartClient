import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesInformationComponent } from './busines-information.component';

describe('BusinesInformationComponent', () => {
  let component: BusinesInformationComponent;
  let fixture: ComponentFixture<BusinesInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
