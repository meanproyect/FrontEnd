import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProductosComponent } from './register-productos.component';

describe('RegisterProductosComponent', () => {
  let component: RegisterProductosComponent;
  let fixture: ComponentFixture<RegisterProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
