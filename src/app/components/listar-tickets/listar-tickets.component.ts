import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket-model';
import { TicketService } from 'src/app/services/ticket.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-listar-tickets',
  templateUrl: './listar-tickets.component.html',
  styleUrls: ['./listar-tickets.component.css']
})
export class ListarTicketsComponent implements OnInit {
  ticket: TicketModel;
  tickes: TicketModel[];
  ticketsProcess: any[];
  ticketsWait: any[];
  ticketsConfirmCustomer: any[];
  ticketsConfirmed: any[];

  search: string;
  intento: boolean;
  constructor(private rest: TicketService, private router: Router) { }

  ngOnInit() {
    this.getTicket();
    this.getTicketProcess();
    this.getTicketWait();
    this.getTicketConfirmCustomer();
    this.getTicketConfirmed();

    this.intento = false;
  }

  getTicket() {
    this.rest.getTicket().subscribe(res => {
      console.log(res);
      this.tickes = res.ticket;
    })
  }

  getTicketProcess() {
    this.rest.getTicketsProcess().subscribe(res => {
      console.log(res);
        this.ticketsProcess = res.ticket;     
    });
  }

  getTicketWait() {
    this.rest.getTicketsWait().subscribe(res => {
      console.log(res);
        this.ticketsWait = res.ticket;
    });
  }

  getTicketConfirmCustomer() {
    this.rest.getTicketsConfirmCustomer().subscribe(res => {
      console.log(res);
        this.ticketsConfirmCustomer = res.ticket;      
    });
  }

  getTicketConfirmed() {
    this.rest.getTicketsConfirmed().subscribe(res => {
      console.log(res);
        this.ticketsConfirmed = res.ticket;
    });
  }

  Buscar2() {
    this.BuscarProcess();
    this.BuscarWait();
    this.BuscarConfirmCustomer();
    this.BuscarConfirmed();
  }

  BuscarProcess() {
    let ticketSearch = this.ticketsProcess.filter(buscar2 => {
      return (buscar2.title.indexOf(this.search.toUpperCase()) > -1 ||
        buscar2.description.indexOf(this.search.toUpperCase()) > -1)
    })

    console.log(ticketSearch);
    if (this.search == "") {
      this.getTicketProcess();
    } else {
      this.ticketsProcess = ticketSearch; 
    }
  }

  BuscarWait() {
    let ticketSearch = this.ticketsWait.filter(buscar2 => {
      return (buscar2.title.indexOf(this.search.toUpperCase()) > -1 ||
        buscar2.description.indexOf(this.search.toUpperCase()) > -1);
    });

    console.log(ticketSearch);
    if (this.search == "") {
      this.getTicketWait();
    } else {
      this.ticketsWait = ticketSearch;
    }
  }

  BuscarConfirmCustomer() {
    let ticketSearch = this.ticketsConfirmCustomer.filter(buscar2 => {
      return (buscar2.title.indexOf(this.search.toUpperCase()) > -1 ||
        buscar2.description.indexOf(this.search.toUpperCase()) > -1);
    });

    console.log(ticketSearch);
    if (this.search == "") {
      this.getTicketConfirmCustomer();
    } else {
      this.ticketsConfirmCustomer = ticketSearch;
    }
  }

  BuscarConfirmed() {
    let ticketSearch = this.ticketsConfirmed.filter(buscar2 => {
      return (buscar2.title.indexOf(this.search.toUpperCase()) > -1 ||
        buscar2.description.indexOf(this.search.toUpperCase()) > -1);
    });

    console.log(ticketSearch);
    if (this.search == "") {
      this.getTicketConfirmed();
    } else {
      this.ticketsConfirmed = ticketSearch;
    }
  }
  verDetaalle(ticket){
    this.router.navigateByUrl('detalle/'+ ticket._id);
  }
}
