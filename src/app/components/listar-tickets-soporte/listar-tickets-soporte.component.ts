import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket-model';
import { TicketService } from 'src/app/services/ticket.service';
import * as jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
import { UpdateConfimTicket } from 'src/app/models/update-confim-ticket';
@Component({
  selector: 'app-listar-tickets-soporte',
  templateUrl: './listar-tickets-soporte.component.html',
  styleUrls: ['./listar-tickets-soporte.component.css']
})
export class ListarTicketsSoporteComponent implements OnInit {
  ticket: TicketModel;
  tickets: []
  ticketstatus: UpdateConfimTicket;
  constructor(private rest: TicketService) {
    this.ticket = new TicketModel('', '', '', '');
    this.ticketstatus = new UpdateConfimTicket('');
  }

  ngOnInit() {
    this.getTicketSopport();
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

  

  updateConfirm(ticket) {
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
          this.getTicketSopport();
        }
      }
    })
  }

  updateProcess(ticket) {
    if (confirm("¿Deseas ponerlo en proceso?")) {
      this.ticketstatus.status = 'PROCESO'
      this.rest.TicketUpdateProcess(ticket._id, this.ticketstatus).subscribe(res => {
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
              title: 'Proceso',
              text: 'Se ha procesado correctamente el ticket',
              timer: 2000
            });
            this.getTicketSopport();
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
          this.getTicketSopport();
        }
      })
    }
  }

}
