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
  tickets: TicketModel[];
  search: string;

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

  Buscar(){
    let ticketSearch = this.tickets.filter(buscar => {
      return (buscar.title.indexOf(this.search.toUpperCase()) > -1 ||
      buscar.description.indexOf(this.search.toUpperCase()) > -1);
    })
    console.log(ticketSearch);
    if (this.search == "") {
      this.getTicket();
    } else {
      this.tickets = ticketSearch;
    }
  }

}
