import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket-model';

@Component({
  selector: 'app-listar-tickets',
  templateUrl: './listar-tickets.component.html',
  styleUrls: ['./listar-tickets.component.css']
})
export class ListarTicketsComponent implements OnInit {
  ticket: TicketModel;
  tickes: [];
  constructor() { }

  ngOnInit() {
  }

}
