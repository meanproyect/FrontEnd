import { Component, OnInit } from '@angular/core';
import { SupportService } from 'src/app/services/support.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { SupportModel } from 'src/app/models/support-model';
import { ClientModels } from 'src/app/models/client-models';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-update-soporte-datos',
  templateUrl: './update-soporte-datos.component.html',
  styleUrls: ['./update-soporte-datos.component.css']
})
export class UpdateSoporteDatosComponent implements OnInit {
  support: SupportModel;
  client: ClientModels;
  clients: [];
  constructor(public rest: SupportService, private router: Router, private params: ActivatedRoute, private restClient: ClientService) {
    this.rest.setSupport(this.support);
    this.support = new SupportModel('', '', '', '', '');
   }

   ngOnInit() {
    if (this.params.snapshot.params.id != ':id') {
      this.rest.buscarSupport(this.params.snapshot.params.id).subscribe(res => {
        this.support.name = res.support.name;
        this.support.surname = res.support.surname;
        this.support.client = res.support.client;
      });
    } else {
      this.support = new SupportModel('', '', '', '', '');
    }
    this.restClient.getClients().subscribe(res =>{
      this.clients = res.client;
    })
  }

onSubmit(){
  this.rest.updateSupportDatos(this.params.snapshot.params.id, this.support).subscribe(res => {
    console.log(res)
    if (res.message == 'Error al actualizar') {
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'Error al actualizar',
        timer: 2000
      })
    } else {
      if (res.support && res.support._id) {
        Swal.fire({
          type: 'success',
          title: 'Actualizado',
          text: 'Se ha actualizado exitosamente',
          timer: 2000
        });
        this.router.navigateByUrl('listarSoporte');
      }
    }
  })
}


}
