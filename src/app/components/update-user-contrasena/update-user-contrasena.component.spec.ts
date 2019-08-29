import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserContrasenaComponent } from './update-user-contrasena.component';

describe('UpdateUserContrasenaComponent', () => {
  let component: UpdateUserContrasenaComponent;
  let fixture: ComponentFixture<UpdateUserContrasenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserContrasenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
