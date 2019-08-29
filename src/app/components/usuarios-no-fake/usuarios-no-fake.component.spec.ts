import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosNoFakeComponent } from './usuarios-no-fake.component';

describe('UsuariosNoFakeComponent', () => {
  let component: UsuariosNoFakeComponent;
  let fixture: ComponentFixture<UsuariosNoFakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosNoFakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosNoFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
