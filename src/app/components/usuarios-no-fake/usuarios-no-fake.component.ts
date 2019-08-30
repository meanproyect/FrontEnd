import { Component, OnInit } from '@angular/core';
import { AdministratorService } from 'src/app/services/administrator.service';
import { AdministratrModel } from 'src/app/models/administratr-model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-usuarios-no-fake',
  templateUrl: './usuarios-no-fake.component.html',
  styleUrls: ['./usuarios-no-fake.component.css']
})
export class UsuariosNoFakeComponent implements OnInit {
  admin: AdministratrModel;
  administrators = [];
  search: string;


  constructor(public rest: AdministratorService, private router: Router) {

  }

  ngOnInit() {
    this.getAdministrators();
  }


  getAdministrators() {
    this.rest.getAdministrator().subscribe(res => {
      console.log(res);
      this.administrators = res.users;
    });
  }

  Buscar() {
    let adminSearch = this.administrators.filter(buscar => {
      return (buscar.name.indexOf(this.search.toUpperCase()) > -1 ||
        buscar.code.indexOf(this.search.toUpperCase()) > -1);
    })
    console.log(adminSearch);
    if (this.search == "") {
      this.getAdministrators()
    } else {
      this.administrators = adminSearch;
    }
  }

  updateAdministratorPassword(admin) {
    this.router.navigateByUrl('registerAdmin/' + admin._id);
  }
  updateAdministrator(admin) {
    this.router.navigateByUrl('updateusercontrasena/' + admin._id);
  }

  deleteAdministrator(admin) {
    if(confirm("¿Deseas eliminar este registro?")){
      this.rest.deleteAdministrator(admin._id).subscribe(res =>{
        if (res.message == 'Error al eliminar') {
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'Error al eliminar',
            timer: 2000
          });
        }else{
          Swal.fire({
            type: 'info',
            title: 'Eliminado',
            text: 'Se ha eliminado correctamente de los registros',
            timer: 2000
          });
          this.getAdministrators();
        }
      })
    }else{
      console.log('Cancelado')
    }
  }
}
