import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket-model';
import { TicketService } from 'src/app/services/ticket.service';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-listar-tickets-soporte',
  templateUrl: './listar-tickets-soporte.component.html',
  styleUrls: ['./listar-tickets-soporte.component.css']
})
export class ListarTicketsSoporteComponent implements OnInit {
  ticket: TicketModel;
  tickets:[]
  constructor(private rest: TicketService) {
    this.ticket = new TicketModel('','','','');
   }

  ngOnInit() {
    this.getTicketSopport();
  }
  getTicketSopport(){
    var token = localStorage.getItem('token');
    var token1 = jwt_decode(token);
    this.ticket.client = token1.client;

    this.rest.TicketAsignado(this.ticket).subscribe(res =>{
      console.log(res);
      this.tickets = res.ticket;
    })
  }

}
