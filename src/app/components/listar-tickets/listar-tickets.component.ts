import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket-model';
import { TicketService } from 'src/app/services/ticket.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-listar-tickets',
  templateUrl: './listar-tickets.component.html',
  styleUrls: ['./listar-tickets.component.css']
})
export class ListarTicketsComponent implements OnInit {
  ticket: TicketModel;
  tickes: TicketModel[];
  search: string;
  constructor(private rest: TicketService) { }

  ngOnInit() {
    this.getTicket();
  }

  getTicket(){
    this.rest.getTicket().subscribe(res =>{
      console.log(res);
      this.tickes = res.ticket;
    })
  }

  Buscar2() {
    let ticketSearch = this.tickes.filter(buscar2 => {
      return (buscar2.title.indexOf(this.search.toUpperCase()) > -1 ||
      buscar2.description.indexOf(this.search.toUpperCase()) > -1);
    })
    console.log(ticketSearch);
    if (this.search == "") {
      this.getTicket()
    } else {
      this.tickes = ticketSearch;
    }
  }

  
}
