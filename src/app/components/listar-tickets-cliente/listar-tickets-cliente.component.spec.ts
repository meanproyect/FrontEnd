import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTicketsClienteComponent } from './listar-tickets-cliente.component';

describe('ListarTicketsClienteComponent', () => {
  let component: ListarTicketsClienteComponent;
  let fixture: ComponentFixture<ListarTicketsClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTicketsClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTicketsClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
