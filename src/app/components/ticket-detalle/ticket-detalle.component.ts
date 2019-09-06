import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/models/ticket-model';
import { TicketService } from 'src/app/services/ticket.service';
import * as jwt_decode from 'jwt-decode';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-detalle',
  templateUrl: './ticket-detalle.component.html',
  styleUrls: ['./ticket-detalle.component.css']
})
export class TicketDetalleComponent implements OnInit {
  ticket: any;
  tickets: TicketModel[];

  constructor(private rest: TicketService, private params: ActivatedRoute, private router: Router) { 
    this.rest.setTicket(this.ticket);
    this.ticket = new TicketModel('','','','','',null);
  }
  

  ngOnInit() {
    
    this.rest.buscarTicket(this.params.snapshot.params.id).subscribe(res => {

      this.ticket.title = res.ticket.title;
      this.ticket.description = res.ticket.description;
      this.ticket.status = res.ticket.status;
      this.ticket.startDate = res.ticket.startDate;
      
     this.ticket._id = res.ticket._id;
     console.log(this.ticket._id)
    });
    
    
  }
  getRegresar(){
    var token = localStorage.getItem('token');
    var token1 = jwt_decode(token);
    if(token1.role == 'CLIENT'){
      this.router.navigateByUrl('listarTicketsCliente');
    }else if(token1.role == 'ADMINISTRATOR'){
      this.router.navigateByUrl('listarTickets');
    }else if(token1.role == 'SUPPORT'){
      this.router.navigateByUrl('listarTickets');
    }
    
  }




}
