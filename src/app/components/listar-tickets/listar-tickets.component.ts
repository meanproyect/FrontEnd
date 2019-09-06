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
  ticketsProcess: TicketModel[];
  ticketsWait: TicketModel[];
  ticketsConfirmCustomer: TicketModel[];
  ticketsConfirmed: TicketModel[];
  process: boolean;
  wait: boolean;
  confirmCustomer: boolean;
  confirm: boolean;
  search: string;
  intento: boolean;
  constructor(private rest: TicketService) { }

  ngOnInit() {
    this.getTicket();
    this.getTicketProcess();
    this.getTicketWait();
    this.getTicketConfirmCustomer();
    this.getTicketConfirmed();
    this.process = true;
    this.wait = true;
    this.confirmCustomer = true;
    this.confirm = true;
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
      if (res.ticket != '') {
        this.ticketsProcess = res.ticket;
      } else {
        this.process = false;
      }
    });
  }

  getTicketWait() {
    this.rest.getTicketsWait().subscribe(res => {
      console.log(res);
      if (res.ticket != '') {
        this.ticketsWait = res.ticket;
      } else {
        this.wait = false;
      }
    });
  }

  getTicketConfirmCustomer() {
    this.rest.getTicketsConfirmCustomer().subscribe(res => {
      console.log(res);
      if (res.ticket != '') {
        this.ticketsConfirmCustomer = res.ticket;
      } else {
        this.confirmCustomer = false;
      }
    });
  }

  getTicketConfirmed() {
    this.rest.getTicketsConfirmed().subscribe(res => {
      console.log(res);
      if (res.ticket != '') {
        this.ticketsConfirmed = res.ticket;
      } else {
        this.confirm = false;
      }
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
    this.intento = false;
    console.log(ticketSearch);
    if (this.search == "") {
      this.getTicketProcess();
    } else {
      this.ticketsProcess = ticketSearch; 
      this.intento = true; 
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
      this.process = true;
    } else {
      this.ticketsConfirmed = ticketSearch;
    }
  }
}
