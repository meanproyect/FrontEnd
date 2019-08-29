import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientModels } from 'src/app/models/client-models';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  client: ClientModels
  constructor(public rest: ClientService, private router: Router, private params: ActivatedRoute) {
    this.rest.setClient(this.client);
    this.client = new ClientModels('', '', '');
  }

  ngOnInit() {
    console.log(this.params.snapshot.params.id);
    if (this.params.snapshot.params.id != '') {

      this.rest.BuscarClient(this.params.snapshot.params.id).subscribe(res => {

        this.client.nameClient = res.client.nameClient;
        this.client.country = res.client.country;
      })
    } else {
      this.client = new ClientModels('', '', '');
    }
  }

  onSubmit() {
    console.log(this.client);
    if (this.params.snapshot.params.id != '') {
      this.rest.updateClient(this.params.snapshot.params.id, this.client).subscribe(res => {
        if (res.message == 'Error al actualizar') {
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'Error al actualizar',
            timer: 2000
          })
        } else {
          if (res.client && res.client._id) {
            Swal.fire({
              type: 'success',
              title: 'Actualizado',
              text: 'Se ha actualizado exitosamente',
              timer: 2000
            })
          }
        }
      })
    } else {
      this.rest.setClient(this.client).subscribe(res => {
        if (res.message == 'Debes de ingresar la información en todos los campos') {
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'Debes de ingresar todos los campos',
            timer: 2000
          });
        } else {
          if (res.client && res.client._id) {
            Swal.fire({
              type: 'success',
              title: 'Guardado',
              text: 'Se ha guardado correctamente',
              timer: 2000
            });
            this.router.navigateByUrl('usuarios');
          } else if (res.message == 'Este Cliente ya se ha registrado') {
            Swal.fire({
              type: 'error',
              title: 'Error',
              text: 'El usuario ya esta registrado',
              timer: 2000
            });
          } else if (res.message == 'Error al guardar el Cliente') {
            Swal.fire({
              type: 'error',
              title: 'Error',
              text: 'Error al guardar el Cliente',
              timer: 2000
            });
          }
        }
      });
    }

  }


}
