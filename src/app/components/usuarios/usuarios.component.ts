import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { ClientModels } from 'src/app/models/client-models';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  client: ClientModels;
  clientes = [];

  constructor(public rest: ClientService, private router: Router) { }

  ngOnInit() {
    this.getClients();
  }

  
  getClients() {
    this.rest.getClients().subscribe(res => {
      this.clientes = res.client;
    });
  }
  updateClients(client){
    this.router.navigateByUrl('register/'+client._id);
  }
  updateClientsDatos(client){
    this.router.navigateByUrl('updateclientecontrasena/'+client._id);
  }
  deleteClient(client){
    if(confirm("Quieres eliminar el cliente?")){
      this.rest.deleteClient(client._id).subscribe(res =>{
        if(res.message == 'Error al eliminar'){
          Swal.fire({
            type: 'error',
            title:'Error',
            text: 'Error al eliminar',
            timer: 2000
          });
        }else{
          Swal.fire({
            type: 'info',
            title:'Eliminado',
            text: 'Se ha eliminado correctamente de los registros',
            timer: 2000
          });
          this.getClients();
        }
      })
    }else{
      console.log('Cancelado')
    }
  }

}
