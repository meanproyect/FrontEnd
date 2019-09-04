import { Component, OnInit } from '@angular/core';
import { SupportModel } from 'src/app/models/support-model';
import { SupportService } from 'src/app/services/support.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AdministratorDatosModels } from 'src/app/models/administrator-datos-models';
import { ClientService } from 'src/app/services/client.service';
import { ClientModels } from 'src/app/models/client-models';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent implements OnInit {
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


  onSubmit() {
    console.log(this.support);
    if (this.params.snapshot.params.id != ':id') {
      this.rest.updateSupport(this.params.snapshot.params.id, this.support).subscribe(res => {
        if (res.message == 'Error al actualizar') {
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'Error al actualizar',
            timer: 2000
          });
        } else {
          if (res.support && res.support._id) {
            Swal.fire({
              type: 'success',
              title: 'Actualizado',
              text: 'Se ha actualizado exitosamente',
              timer: 2000
            });
            this.router.navigateByUrl('listarSoporte');
          }else if( res.message == 'Debes de llenar el campo de contraseña'){
            Swal.fire({
              type: 'error',
              title: 'Error',
              text: 'Debes de llenar el campo de contraseña',
              timer: 2000
            });
          }
        }
      })
    } else {
      this.rest.setSupport(this.support).subscribe(res => {
        if (res.message == 'Debes de ingresar la información en todos los campos') {
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'Debes de ingresar todos los campos',
            timer: 2000
          });
        } else {
          if (res.support && res.support._id) {
            Swal.fire({
              type: 'success',
              title: 'Guardado',
              text: 'Se ha guardado correctamente',
              timer: 2000
            });
            this.router.navigateByUrl('listarSoporte');
          } else if (res.message == 'Ya esta registrado el usuario') {
            Swal.fire({
              type: 'error',
              title: 'Error',
              text: 'El tecnico ya esta registrado',
              timer: 2000
            });
          } else if (res.message == 'Ya esta registrado el usuario') {
            Swal.fire({
              type: 'error',
              title: 'Error',
              text: 'Error al guardar al tecnico de soporte',
              timer: 2000
            });
          }
        }
      });
    }

  }

}
