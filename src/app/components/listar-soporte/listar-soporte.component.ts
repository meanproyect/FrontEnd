import { Component, OnInit } from '@angular/core';
import { SupportService } from 'src/app/services/support.service';
import { SupportModel } from 'src/app/models/support-model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-soporte',
  templateUrl: './listar-soporte.component.html',
  styleUrls: ['./listar-soporte.component.css']
})
export class ListarSoporteComponent implements OnInit {
  support: SupportModel;
  supports = [];
  search: string;


  constructor(public rest: SupportService, private router: Router) { }

  ngOnInit() {
    this.getSupports();
  }

  getSupports(){
    this.rest.getSupport().subscribe(res => {
      console.log(res);
      this.supports = res.support;
    });
  }

  Buscar() {
    let supportSearch = this.supports.filter(buscar => {
      return (buscar.name.indexOf(this.search.toUpperCase()) > -1 ||
      buscar.code.indexOf(this.search.toUpperCase()) > -1);
    })
    console.log(supportSearch);
    if (this.search == "") {
      this.getSupports()
    } else {
      this.supports = supportSearch;
    }
  }

  updateSupports(support){
    this.router.navigateByUrl('updateSoporteDatos/'+support._id);
  }

  updateSupportsContrasena(support){
    this.router.navigateByUrl('soporte/'+support._id);
  }

  deleteSupport(support){
    if(confirm("¿Deseas eliminar este cliente?")){
      this.rest.deleteSupport(support._id).subscribe(res =>{
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
          this.getSupports();
        }
      })
    }else{
      console.log('Cancelado')
    }
  }

}
