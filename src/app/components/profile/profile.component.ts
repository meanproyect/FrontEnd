import { Component, OnInit } from '@angular/core';
import { ClientModels } from 'src/app/models/client-models'
import { AdministratrModel } from 'src/app/models/administratr-model';
import { ClientService } from 'src/app/services/client.service';
import { AdministratorService  } from 'src/app/services/administrator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  client: ClientModels;
  clientes = [];
  admin: AdministratrModel;
  administrators = [];

  constructor(public rest: ClientService, public rest2: AdministratorService) { }

  ngOnInit() {
    this.getAdministrators();
    this.getClients();
  }

  getClients() {
    this.rest.getClients().subscribe(res => {
      this.clientes = res.client;
    });
  }

  getAdministrators() {
    this.rest2.getAdministrator().subscribe(res => {
      console.log(res);
      this.administrators = res.users;
    });
  }

}
