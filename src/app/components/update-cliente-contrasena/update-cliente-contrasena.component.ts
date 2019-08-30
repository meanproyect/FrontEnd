import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientModels } from 'src/app/models/client-models';
import { ClientService } from 'src/app/services/client.service';
import { ClientDatosModels } from 'src/app/models/client-datos-models';
@Component({
  selector: 'app-update-cliente-contrasena',
  templateUrl: './update-cliente-contrasena.component.html',
  styleUrls: ['./update-cliente-contrasena.component.css']
})
export class UpdateClienteContrasenaComponent implements OnInit {
  client: ClientDatosModels
  constructor(public rest: ClientService, private router: Router, private params: ActivatedRoute) {
    this.rest.setClient(this.client);
    this.client = new ClientDatosModels('', '');
  }
  ngOnInit() {
    this.rest.BuscarClient(this.params.snapshot.params.id).subscribe(res => {
      console.log(res)
      this.client.nameClient = res.client.nameClient;
      this.client.country = res.client.country;
    })
  }

  onSubmit(){
    this.rest.updateClientDatos(this.params.snapshot.params.id, this.client).subscribe(res => {
      console.log(res)
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
          });
          this.router.navigateByUrl('usuarios');
        }
      }
    })
  }
}
