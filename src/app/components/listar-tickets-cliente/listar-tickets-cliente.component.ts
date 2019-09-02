import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket-model';
import { TicketService } from 'src/app/services/ticket.service';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-listar-tickets-cliente',
  templateUrl: './listar-tickets-cliente.component.html',
  styleUrls: ['./listar-tickets-cliente.component.css']
})
export class ListarTicketsClienteComponent implements OnInit {
  ticket: TicketModel;
  tickets: [];
  constructor(private rest: TicketService) {
    this.rest.setTicket(this.ticket);
    this.ticket = new TicketModel('','','','');
  }

  ngOnInit() {
    this.getTicketsClient();
  }
  getTicketsClient() {
    var token = localStorage.getItem('token');
    var token1 = jwt_decode(token);
    this.ticket.client = token1.sub;

    this.rest.TicketAsignado(this.ticket).subscribe(res =>{
      this.tickets = res.ticket;
    })
  }
}
