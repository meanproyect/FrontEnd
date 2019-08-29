import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ClientModels } from 'src/app/models/client-models';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  client: ClientModels
  constructor(public rest: ClientService,private router: Router ) { 
    this.rest.setClient(this.client);
    this.client = new ClientModels('','','');
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.client);
    this.rest.setClient(this.client).subscribe(res =>{
      if(res.message == 'Debes de ingresar la información en todos los campos'){
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'Debes de ingresar todos los campos',
          timer: 1500
        });
      }else{
        if(res.client && res.client._id){
          Swal.fire({
            type: 'success',
            title: 'Guardado',
            text: 'Se ha guardado correctamente',
            timer: 1500
          });
        }else if(res.message == 'Este Cliente ya se ha registrado'){
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'El usuario ya esta registrado',
            timer: 1500
          });
        }else if(res.message == 'Error al guardar el Cliente'){
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'Error al guardar el Cliente',
            timer: 1500
          });
        }
      }
    });
  }
  

}
