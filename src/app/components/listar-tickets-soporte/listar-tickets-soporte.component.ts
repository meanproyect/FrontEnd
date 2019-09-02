import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket-model';
import { TicketService } from 'src/app/services/ticket.service';
import * as jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar-tickets-soporte',
  templateUrl: './listar-tickets-soporte.component.html',
  styleUrls: ['./listar-tickets-soporte.component.css']
})
export class ListarTicketsSoporteComponent implements OnInit {
  ticket: TicketModel;
  tickets: []
  constructor(private rest: TicketService) {
    this.ticket = new TicketModel('', '', '', '');
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
    this.rest.TicketUpdateConform(ticket._id).subscribe(res => {
      if (res.message == 'Error al actualizar') {
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'Error al confimar',
          timer: 2000
        });
      }else{
        if(res.update && res.update._id){
          Swal.fire({
            type: 'info',
            title:'Confirmar',
            text: 'Se ha confirmado correctamente el ticket',
            timer: 2000
          });
        }
      }
    })
  }

}
