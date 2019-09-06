import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket-model';
import { TicketService } from 'src/app/services/ticket.service';
import * as jwt_decode from 'jwt-decode';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import Swal from 'sweetalert2';
import { UpdateConfimTicket } from 'src/app/models/update-confim-ticket';
@Component({
  selector: 'app-listar-tickets-cliente',
  templateUrl: './listar-tickets-cliente.component.html',
  styleUrls: ['./listar-tickets-cliente.component.css']
})
export class ListarTicketsClienteComponent implements OnInit {
  ticket: TicketModel;
  tickets: TicketModel[];
  search: string;
  ticketstatus: UpdateConfimTicket
  ticketsProcess: any[];
  ticketsWait: any[];
  ticketsConfirmCustomer: any[];
  ticketsConfirmed: any[];
  intento: boolean;

  constructor(private rest: TicketService, private router: Router) {
    this.rest.setTicket(this.ticket);
    this.ticket = new TicketModel('', '', '', '','',null);
    this.ticketstatus = new UpdateConfimTicket('');
  }

  ngOnInit() {
    this.getTicketSopport();
    this.getTicketProcess();
    this.getTicketWait();
    this.getTicketConfirmCustomer();
    this.getTicketConfirmed();
    this.intento = false;
  }

  getTicketSopport() {
    var token = localStorage.getItem('token');
    var token1 = jwt_decode(token);
    this.ticket.client = token1.client;

    this.rest.TicketAsignado(this.ticket).subscribe(res => {
      console.log(res);
      this.tickets = res.ticket;
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

  getTicketsClient() {
    var token = localStorage.getItem('token');
    var token1 = jwt_decode(token);
    this.ticket.client = token1.sub;

    this.rest.TicketAsignado(this.ticket).subscribe(res => {
      this.tickets = res.ticket;
    })
  }

  Buscar() {
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
      // this.process = 'true';
    } else {
      this.ticketsConfirmed = ticketSearch;
    }
  }  

  updateTicketClient(ticket) {
    this.router.navigateByUrl('tickets/' + ticket._id);
  }

  deleteTicketClient(ticket) {
    if (confirm("¿Deseas eliminar el ticket?")) {
      this.rest.deleteTicket(ticket._id).subscribe(res => {
        if (res.message == 'Eliminado de la base de datos') {
          Swal.fire({
            type: 'info',
            title: 'Eliminado',
            text: 'Se ha eliminado correctamente de los registros',
            timer: 2000
          });
          this.getTicketProcess();
          this.getTicketWait();
          this.getTicketConfirmCustomer();
          this.getTicketConfirmed();
        }
      })
    }
  }

  updateConfirm(ticket) {
    if (confirm("¿Deseas Confirmar el Ticket?")) {
      this.ticketstatus.status = 'CONFIRMAR'
      this.rest.TicketUpdateConform(ticket._id, this.ticketstatus).subscribe(res => {
        if (res.message == 'Error al actualizar') {
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'Error al confimar',
            timer: 2000
          });
        } else {
          if (res.update && res.update._id) {

            Swal.fire({
              type: 'info',
              title: 'Confirmar',
              text: 'Se ha confirmado correctamente el ticket',
              timer: 2000
            });
            this.getTicketProcess();
            this.getTicketWait();
            this.getTicketConfirmCustomer();
            this.getTicketConfirmed();
          }
        }
      })
    }
  }
  updateTicketEnd(ticket) {
    if (confirm("¿Deseas Terminar el Ticket?")) {
      this.ticketstatus.status = 'TERMINADO'
      this.rest.TicketUpdateEnd(ticket._id, this.ticketstatus).subscribe(res => {
        if (res.message == 'Se ha terminado el ticket') {
          Swal.fire({
            type: 'info',
            title: 'Terminado',
            text: 'Se ha terminado el ticket',
            timer: 2000
          });
          this.getTicketProcess();
          this.getTicketWait();
          this.getTicketConfirmCustomer();
          this.getTicketConfirmed();
        }
      })
    }
  }
  verDetaalle(ticket){
    this.router.navigateByUrl('detalle/'+ ticket._id);
  }
  
}
