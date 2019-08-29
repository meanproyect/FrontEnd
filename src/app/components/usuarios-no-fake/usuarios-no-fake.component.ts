import { Component, OnInit } from '@angular/core';
import { AdministratorService } from 'src/app/services/administrator.service';
import { AdministratrModel } from 'src/app/models/administratr-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuarios-no-fake',
  templateUrl: './usuarios-no-fake.component.html',
  styleUrls: ['./usuarios-no-fake.component.css']
})
export class UsuariosNoFakeComponent implements OnInit {
  admin: AdministratrModel;
  administrators = [];


  constructor(public rest: AdministratorService, private router: Router) {
    
   }

  ngOnInit() {
    this.getAdministrators();
  }

  
  getAdministrators() {
    this.rest.getAdministrator().subscribe(res => {
      this.administrators = res.admin;
    });
  }
  
}
