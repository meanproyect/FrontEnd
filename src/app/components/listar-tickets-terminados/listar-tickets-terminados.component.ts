import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket-model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-listar-tickets-terminados',
  templateUrl: './listar-tickets-terminados.component.html',
  styleUrls: ['./listar-tickets-terminados.component.css']
})
export class ListarTicketsTerminadosComponent implements OnInit {
  ticket: TicketModel
  tickets: [];

  constructor(private rest: TicketService) { }

  ngOnInit() {
    this.getTicket();
  }

  getTicket(){
    this.rest.getTicketsFinished().subscribe(res =>{
      console.log(res);
      this.tickets = res.ticket;
    })
  }

}
