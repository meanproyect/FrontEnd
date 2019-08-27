import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrritoComponent } from './carrrito.component';

describe('CarrritoComponent', () => {
  let component: CarrritoComponent;
  let fixture: ComponentFixture<CarrritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
