import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket-model';
import { TicketService } from 'src/app/services/ticket.service';
import * as jwt_decode from 'jwt-decode';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar-tickets-cliente',
  templateUrl: './listar-tickets-cliente.component.html',
  styleUrls: ['./listar-tickets-cliente.component.css']
})
export class ListarTicketsClienteComponent implements OnInit {
  ticket: TicketModel;
  tickets: [];
  constructor(private rest: TicketService, private router: Router) {
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
  updateTicketClient(ticket){
    this.router.navigateByUrl('tickets/'+ ticket._id);
  }

  deleteTicketClient(ticket){
    if(confirm("¿Deseas eliminar el ticket?")){
      this.rest.deleteTicket(ticket._id).subscribe(res =>{
        if(res.message == 'Eliminado de la base de datos'){
          Swal.fire({
            type: 'info',
            title:'Eliminado',
            text: 'Se ha eliminado correctamente de los registros',
            timer: 2000
          });
          this.getTicketsClient();
        }
      })
    }
  }
}
