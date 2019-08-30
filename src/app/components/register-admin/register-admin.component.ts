import { Component, OnInit } from '@angular/core';
import { AdministratrModel } from 'src/app/models/administratr-model';
import { AdministratorService } from 'src/app/services/administrator.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  admin: AdministratrModel;

  constructor(public rest: AdministratorService, private router: Router, private params: ActivatedRoute) {
    this.rest.setAdministrator(this.admin);
    this.admin = new AdministratrModel('', '', '', '');
  }

  ngOnInit() {
    if (this.params.snapshot.params.id != ':id') {
      this.rest.buscarAdministrator(this.params.snapshot.params.id).subscribe(res => {
        console.log(res)
        this.admin.name = res.user.name;
        this.admin.surname = res.user.surname;
        this.admin.role = res.user.role;
      });
    } else {
      this.admin = new AdministratrModel('', '', '', '');
    }
  }

  onSubmit() {
    if (this.params.snapshot.params.id != ':id') {
      this.rest.updateAdministrator(this.params.snapshot.params.id, this.admin).subscribe(res =>{
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
    } else {
      this.rest.setAdministrator(this.admin).subscribe(res => {
        if (res.message == 'Ya esta registrado el usuario') {
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'El Usario ya se encuentra registrado',
            timer: 2000
          })
        } else {
          if (res.user && res.user._id) {
            Swal.fire({
              type: 'success',
              title: 'Guardado',
              text: 'Fue guardado exitosamente',
              timer: 2000
            })
            this.router.navigateByUrl('usuariosNoFake');
          } else if (res.message == 'Debes de ingresar la informacion en todos los campos') {
            Swal.fire({
              type: 'error',
              title: 'Campos',
              text: 'Debes de llenar todos los campos',
              timer: 2000
            })
          }
        }
      })
    }
  }
}
