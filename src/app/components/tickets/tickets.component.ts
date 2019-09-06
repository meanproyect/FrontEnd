import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { TicketModel } from 'src/app/models/ticket-model';
import { TicketService } from 'src/app/services/ticket.service';
import * as jwt_decode from 'jwt-decode';
import { UploadService } from 'src/app/services/upload.service';
import { error } from 'util';
declare const myTest: any;
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  
  ticket: TicketModel;
  fileToUpload: Array<File>;
  constructor(public rest: TicketService, private router: Router, private params: ActivatedRoute, public upload: UploadService) {
    this.rest.setTicket(this.ticket);
    this.ticket = new TicketModel('','','','','',null);
   }

  ngOnInit() {
    if(this.params.snapshot.params.id != ':id'){
      this.rest.buscarTicket(this.params.snapshot.params.id).subscribe(res =>{
        this.ticket.title = res.ticket.title;
        this.ticket.description = res.ticket.description;
      })
    }else{
      this.ticket = new TicketModel('','','','','',null);
    }
  }
  onSubmit(){
    if(this.params.snapshot.params.id != ':id'){
      let toke = localStorage.getItem('token');
      let token1 = jwt_decode(toke);
      this.ticket.client = token1.sub;
      this.ticket.status = 'ESPERA'
      this.rest.updateTicket(this.params.snapshot.params.id,this.ticket).subscribe(res =>{
        if(res.message =='Error al actualizar'){
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'Error al actualizar',
            timer: 2000
          });
        }else{
          if(res.update && res.update._id){
            Swal.fire({
              type:'success',
              title: 'Actualizar',
              text: 'Se ha actualizado correctamente',
              timer: 2000
            });
            this.router.navigateByUrl('listarTicketsCliente');
          }
        }
      });
    }else{
      let toke = localStorage.getItem('token');
      let token1 = jwt_decode(toke);
      this.ticket.client = token1.sub;
      this.rest.setTicket(this.ticket).subscribe(res =>{
        console.log(res);
        if(res.message == 'Error al guardar ticket'){
          Swal.fire({
            type: 'error',
            title:'Error',
            text: 'Error al guardar Ticket'
          });
        }else{
          if(res.ticket && res.ticket._id){
            
            this.upload.uploadPhoto(res.ticket._id, this.fileToUpload).catch(error);
            Swal.fire({
              type: 'success',
              title: 'Guardado',
              text: 'Se ha guardado corrrectamente',
              timer: 2000
            });
            this.router.navigateByUrl('listarTicketsCliente');
          }
        }
      });
    }
  }

fileChangeEvent(event: any){
  this.fileToUpload = <Array<File>>event.target.files;
}

onClick() {
  myTest();
}


}
