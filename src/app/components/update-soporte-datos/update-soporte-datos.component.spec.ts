import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSoporteDatosComponent } from './update-soporte-datos.component';

describe('UpdateSoporteDatosComponent', () => {
  let component: UpdateSoporteDatosComponent;
  let fixture: ComponentFixture<UpdateSoporteDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSoporteDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSoporteDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
