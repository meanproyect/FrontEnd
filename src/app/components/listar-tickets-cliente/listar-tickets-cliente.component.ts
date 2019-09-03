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
  constructor(private rest: TicketService, private router: Router) {
    this.rest.setTicket(this.ticket);
    this.ticket = new TicketModel('', '', '', '');
    this.ticketstatus = new UpdateConfimTicket('');
  }

  ngOnInit() {
    this.getTicketsClient();
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
    let ticketSearch = this.tickets.filter(buscar => {
      return (buscar.title.indexOf(this.search.toUpperCase()) > -1 ||
      buscar.description.indexOf(this.search.toUpperCase()) > -1);
    })
    console.log(ticketSearch);
    if (this.search == "") {
      this.getTicketsClient()
    } else {
      this.tickets = ticketSearch;
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
          this.getTicketsClient();
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
            this.getTicketsClient();
          }
        }
      })
    }
  }
}
