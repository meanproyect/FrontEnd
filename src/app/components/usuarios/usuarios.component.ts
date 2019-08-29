import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { ClientModels } from 'src/app/models/client-models';
import { Router } from '@angular/router';


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

}
