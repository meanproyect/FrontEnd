import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTicketsTerminadosComponent } from './listar-tickets-terminados.component';

describe('ListarTicketsTerminadosComponent', () => {
  let component: ListarTicketsTerminadosComponent;
  let fixture: ComponentFixture<ListarTicketsTerminadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTicketsTerminadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTicketsTerminadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
