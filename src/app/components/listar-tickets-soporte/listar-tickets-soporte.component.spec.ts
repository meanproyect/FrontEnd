import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTicketsSoporteComponent } from './listar-tickets-soporte.component';

describe('ListarTicketsSoporteComponent', () => {
  let component: ListarTicketsSoporteComponent;
  let fixture: ComponentFixture<ListarTicketsSoporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTicketsSoporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTicketsSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
