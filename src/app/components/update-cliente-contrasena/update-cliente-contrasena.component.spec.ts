import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClienteContrasenaComponent } from './update-cliente-contrasena.component';

describe('UpdateClienteContrasenaComponent', () => {
  let component: UpdateClienteContrasenaComponent;
  let fixture: ComponentFixture<UpdateClienteContrasenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateClienteContrasenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClienteContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
