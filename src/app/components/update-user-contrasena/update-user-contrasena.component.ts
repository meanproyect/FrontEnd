import { Component, OnInit } from '@angular/core';
import { AdministratrModel } from 'src/app/models/administratr-model';
import { AdministratorService } from 'src/app/services/administrator.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AdministratorDatosModels } from 'src/app/models/administrator-datos-models';
@Component({
  selector: 'app-update-user-contrasena',
  templateUrl: './update-user-contrasena.component.html',
  styleUrls: ['./update-user-contrasena.component.css']
})
export class UpdateUserContrasenaComponent implements OnInit {
  admin: AdministratorDatosModels;
  constructor(public rest: AdministratorService, private router: Router, private params: ActivatedRoute) {
    this.rest.setAdministrator(this.admin);
    this.admin = new AdministratorDatosModels('', '', '');
   }

  ngOnInit() {
    this.rest.buscarAdministrator(this.params.snapshot.params.id).subscribe(res => {
      console.log(res)
      this.admin.name = res.user.name;
      this.admin.surname = res.user.surname;
      this.admin.role = res.user.role;
    });
  }
  updateClient(){
    this.rest.updateAdministratorDatos(this.params.snapshot.params.id, this.admin).subscribe(res =>{
      console.log(res)
      if(res.message == 'Error al actualizar'){
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'Eror al Actualizar',
          timer: 2000
        })
      }else{
        if(res.user && res.user._id){
          Swal.fire({
            type: 'success',
            title: 'Actulizando',
            text: 'Actualizado correactamente!',
            timer:2000
          });
          this.router.navigateByUrl('usuariosNoFake');
        }else if(res.message =='Debes de ingresar la contraseña obligatoriamente'){
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'Debes de ingresar el campo de contraseña',
            timer: 2000
          })
        }
      }
    })
  }

}
