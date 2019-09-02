import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSoporteComponent } from './listar-soporte.component';

describe('ListarSoporteComponent', () => {
  let component: ListarSoporteComponent;
  let fixture: ComponentFixture<ListarSoporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSoporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
