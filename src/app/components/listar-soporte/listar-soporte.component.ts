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

}
